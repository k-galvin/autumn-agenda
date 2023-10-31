import { useEffect, useState } from 'react'
import { useAuthentication } from '../services/authService'
import { createArticle, removeArticle, fetchAllArticles, uploadImageToStorage } from '../services/articleService'

import './App.css'
import AllPage from './AllPage.js'
import Article from './Article.js'
import ArticleEntry from './ArticleEntry.js'
import Header from './Header.js'
import HomePage from './HomePage.js'
import LifestylePage from './LifestylePage.js'
import Login from './Login.js'
import RecipePage from './RecipePage.js'

export default function App() {
  const [article, setArticle] = useState([])
  const [articles, setArticles] = useState([])
  const [category, setCategory] = useState('none')
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [reading, setReading] = useState(false)
  const [writing, setWriting] = useState(false)
  const user = useAuthentication()

  useEffect(() => {
    if (user) {
      setLoading(true)

      fetchAllArticles().then(articles => {
        setArticles(articles)

        if (articles.length > 0) {
          setArticle(articles[0])
          setCurrentArticleIndex(0)
        } else {
          setArticle(null)
          setCurrentArticleIndex(0)
        }

        setLoading(false)
      })
    }
  }, [user, category])

  // Adds inputed article to "database" *then* to the internal React state.
  async function addArticle({ title, body, category, file }) {
    try {
      const imageUrl = await uploadImageToStorage(file)

      createArticle({ title, body, category, imageUrl }).then(newArticle => {
        setArticle(newArticle)
        setArticles([newArticle, ...articles])
        setWriting(false)
        setCategory(category)
      })
    } catch (error) {
      setError(error.message)
    }
  }

  // Removes selected article from the "database" and updates the internal React state.
  function deleteArticle() {
    if (article) {
      removeArticle(article.id)
        .then(() => {
          setArticle(null)
          setArticles(articles.filter(a => a.id !== article.id))
          setCategory('all')
          setCurrentArticleIndex(0)
          setReading(false)
        })
        .catch(error => {
          setError(error.message)
        })
    }
  }

  // Filters articles down to those in the selected category
  function filterArticlesByCategory(category) {
    return articles.filter(a => a.category === category)
  }

  return (
    <div className="App">
      {/* Header that contains blog name, article categories, and user login */}
      <Header article={article} setCategory={setCategory} user={user} setReading={setReading} />

      {error && <div className="error-message">{error}</div>}

      {!user ? (
        // Login page
        <Login />
      ) : writing ? (
        // Article entry that displays when new article button is clicked
        <ArticleEntry addArticle={addArticle} setWriting={setWriting} />
      ) : reading ? (
        // Article content
        <Article
          article={article}
          currentArticleIndex={currentArticleIndex}
          articles={category !== 'all' ? filterArticlesByCategory(category) : articles}
          setArticle={setArticle}
          deleteArticle={deleteArticle}
          setReading={setReading}
          setWriting={setWriting}
          loading={loading}
          category={category}
          setCurrentArticleIndex={setCurrentArticleIndex}
        />
      ) : category === 'none' ? (
        // Home page
        <HomePage
          articles={articles}
          setArticle={setArticle}
          setReading={setReading}
          setCategory={setCategory}
          setCurrentArticleIndex={setCurrentArticleIndex}
        />
      ) : category === 'recipes' ? (
        // Recipe category landing page
        <RecipePage
          articles={filterArticlesByCategory('recipes')}
          setWriting={setWriting}
          setArticle={setArticle}
          setReading={setReading}
          setCurrentArticleIndex={setCurrentArticleIndex}
        />
      ) : category === 'lifestyle' ? (
        // Lifestyle category landing page
        <LifestylePage
          articles={filterArticlesByCategory('lifestyle')}
          setArticle={setArticle}
          setReading={setReading}
          setWriting={setWriting}
          setCurrentArticleIndex={setCurrentArticleIndex}
        />
      ) : category === 'all' ? (
        // Landing page for when all articles are selected
        <AllPage
          articles={articles}
          setArticle={setArticle}
          setReading={setReading}
          setWriting={setWriting}
          setCurrentArticleIndex={setCurrentArticleIndex}
        />
      ) : (
        ''
      )}
    </div>
  )
}
