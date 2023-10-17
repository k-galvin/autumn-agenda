import { useEffect, useState } from 'react'
import Nav from './Nav.js'
import Article from './Article.js'
import ArticleEntry from './ArticleEntry.js'
import { SignIn, SignOut, useAuthentication } from '../services/authService'
import { fetchArticles, createArticle, removeArticle } from '../services/articleService'
import './App.css'

export default function App() {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const [writing, setWriting] = useState(false)
  const user = useAuthentication()

  // This is a trivial app, so just fetch all the articles only when
  // a user logs in. A real app would do pagination. Note that
  // "fetchArticles" is what gets the articles from the service and
  // then "setArticles" writes them into the React state.
  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles)
    }
  }, [user])

  // Update the "database" *then* update the internal React state. These
  // two steps are definitely necessary.
  function addArticle({ title, body }) {
    createArticle({ title, body }).then(article => {
      setArticle(article)
      setArticles([article, ...articles])
      setWriting(false)
    })
  }

  function deleteArticle() {
    if (article) {
      removeArticle(article.id)
      setArticle(null)
      setArticles(articles.filter(a => a.id !== article.id))
    }
  }

  function closeArticle() {
    setArticle(null)
  }

  return (
    <div className="App">
      <header>
        <span onClick={closeArticle} style={{ cursor: 'pointer' }}>
          AUTUMN AGENDA
        </span>
        {user && <button onClick={() => setWriting(true)}>New Article</button>}
        {user && article && <button onClick={deleteArticle}>Delete Article</button>}
        {!user ? <SignIn /> : <SignOut />}
      </header>

      {!user ? '' : <Nav articles={articles} setArticle={setArticle} />}

      {!user ? '' : writing ? <ArticleEntry addArticle={addArticle} /> : <Article article={article} />}
    </div>
  )
}
