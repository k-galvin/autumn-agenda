import { useEffect, useState } from 'react'
import Nav from './Nav.js'
import Article from './Article.js'
import ArticleEntry from './ArticleEntry.js'
import { SignIn, SignOut, useAuthentication } from '../services/authService'
import { fetchArticles, createArticle, removeArticle } from '../services/articleService'
import './App.css'
import CategorySelect from './CategorySelect.js'

export default function App() {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const [writing, setWriting] = useState(false)
  const [category, setCategory] = useState('all')
  const user = useAuthentication()

  // Fetch all the articles once when a user logs in.
  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles)
    }
  }, [user])

  // Adds inputed article to "database" *then* to the internal React state.
  function addArticle({ title, body, category }) {
    createArticle({ title, body, category }).then(article => {
      setArticle(article)
      setArticles([article, ...articles])
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
    }
  }

  // Closes the currently selected article.
  function closeArticle() {
    setArticle(null)
    setCategory('all')
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value)
  }

  return (
    <div className="App">
      <header>
        <span onClick={closeArticle} style={{ cursor: 'pointer' }}>
          AUTUMN AGENDA
        </span>
        {user && <button onClick={() => setWriting(true)}>New Article</button>}
        {user && article && <button onClick={deleteArticle}>Delete Article</button>}
        {user && <CategorySelect category={category} handleCategoryChange={handleCategoryChange} />}
        {!user ? <SignIn /> : <SignOut />}
      </header>

      {!user ? '' : <Nav articles={articles} setArticle={setArticle} category={category} />}

      {!user ? '' : writing ? <ArticleEntry addArticle={addArticle} /> : <Article article={article} />}
    </div>
  )
}
