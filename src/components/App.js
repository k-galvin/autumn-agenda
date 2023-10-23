import { useEffect, useState } from 'react'
import Nav from './Nav.js'
import Article from './Article.js'
import ArticleEntry from './ArticleEntry.js'
import { SignIn, SignOut, useAuthentication } from '../services/authService'
import { fetchArticlesByCategory, createArticle, removeArticle, uploadImageToStorage } from '../services/articleService'
import './App.css'

export default function App() {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const [writing, setWriting] = useState(false)
  const [category, setCategory] = useState('all')
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0)
  const user = useAuthentication()

  useEffect(() => {
    if (user) {
      fetchArticlesByCategory(category).then(articles => {
        setArticles(articles)

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

  // Closes the currently selected article.
  function closeArticle() {
    setArticle(null)
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value)
    setCurrentArticleIndex(0)
  }

  return (
    <div className="App">
      <header>
        <span onClick={closeArticle} style={{ cursor: 'pointer' }}>
          AUTUMN AGENDA
        </span>
        {user && <button onClick={() => setWriting(true)}>New Article</button>}
        {user && article && <button onClick={deleteArticle}>Delete Article</button>}
        <button onClick={navigateToPreviousArticle} disabled={currentArticleIndex === 0}>
          Previous Article
        </button>
        <button onClick={navigateToNextArticle} disabled={currentArticleIndex === articles.length - 1}>
          Next Article
        </button>
        {!user ? <SignIn /> : <SignOut />}
      </header>

      {!user ? (
        ''
      ) : (
        <Nav
          articles={articles}
          setArticle={setArticle}
          category={category}
          handleCategoryChange={handleCategoryChange}
        />
      )}

      {!user ? (
        ''
      ) : writing ? (
        <ArticleEntry addArticle={addArticle} cancelEntry={() => setWriting(false)} />
      ) : (
        <Article article={article} />
      )}
    </div>
  )
}
