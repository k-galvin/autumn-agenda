import { useEffect, useState } from 'react'
import Article from './Article.js'
import ArticleEntry from './ArticleEntry.js'
import { useAuthentication } from '../services/authService'
import { fetchArticlesByCategory, createArticle, removeArticle, uploadImageToStorage } from '../services/articleService'
import './App.css'
import Header from './Header.js'
import Login from './Login.js'
import RecipePage from './RecipePage.js'
import LifestylePage from './LifestylePage.js'
import AllPage from './AllPage.js'
import HomePage from './HomePage.js'
import { LoadingPage } from './LoadingPage.js'

export default function App() {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState([])
  const [writing, setWriting] = useState(false)
  const [reading, setReading] = useState(false)
  const [category, setCategory] = useState('all')
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState('home')
  const [loading, setLoading] = useState(false)
  const user = useAuthentication()

  useEffect(() => {
    if (user) {
      setLoading(true)

      fetchArticlesByCategory(category).then(articles => {
        setArticles(articles)
        setLoading(false)

        if (articles.length > 0) {
          setArticle(articles[0])
          setCurrentArticleIndex(0)
        } else {
          setArticle(null)
          setCurrentArticleIndex(0)
        }
      })
    }
  }, [user, category])

  function navigateToNextArticle() {
    if (currentArticleIndex < articles.length - 1) {
      setCurrentArticleIndex(currentArticleIndex + 1)
      setArticle(articles[currentArticleIndex + 1])
    }
  }

  function navigateToPreviousArticle() {
    if (currentArticleIndex > 0) {
      setCurrentArticleIndex(currentArticleIndex - 1)
      setArticle(articles[currentArticleIndex - 1])
    }
  }

  // Adds inputed article to "database" *then* to the internal React state.
  async function addArticle({ title, body, category, file }) {
    const imageUrl = await uploadImageToStorage(file)

    createArticle({ title, body, category, imageUrl }).then(newArticle => {
      setArticle(newArticle)
      setArticles([newArticle, ...articles])
      setWriting(false)
      setCategory(category)
    })
  }

  // Removes selected article from the "database" and updates the internal React state.
  function deleteArticle() {
    if (article) {
      removeArticle(article.id)
      setArticle(null)
      setArticles(articles.filter(a => a.id !== article.id))
      setCategory('all')
      setCurrentArticleIndex(0)
    }
  }

  return (
    <div className="App">
      {/* Header that contains blog name, article categories, and user login */}
      <Header
        article={article}
        setCategory={setCategory}
        user={user}
        setReading={setReading}
        setCurrentPage={setCurrentPage}
      />

      {!user ? (
        <Login />
      ) : writing ? (
        // Article entry that displays when new article button is clicked
        <ArticleEntry addArticle={addArticle} setWriting={setWriting} />
      ) : reading ? (
        // Article content that shows when an article or category is selected
        <Article
          article={article}
          navigateToNextArticle={navigateToNextArticle}
          navigateToPreviousArticle={navigateToPreviousArticle}
          currentArticleIndex={currentArticleIndex}
          articles={articles}
          setArticle={setArticle}
          deleteArticle={deleteArticle}
          setReading={setReading}
          setWriting={setWriting}
          loading={loading}
        />
      ) : currentPage === 'recipes' ? (
        <RecipePage articles={articles} setArticle={setArticle} setReading={setReading} />
      ) : currentPage === 'lifestyle' ? (
        <LifestylePage articles={articles} setArticle={setArticle} setReading={setReading} />
      ) : currentPage === 'home' ? (
        <HomePage articles={articles} setArticle={setArticle} setReading={setReading} setCurrentPage={setCurrentPage} />
      ) : currentPage === 'all' ? (
        <AllPage articles={articles} setArticle={setArticle} setReading={setReading} />
      ) : (
        ''
      )}
    </div>
  )
}
