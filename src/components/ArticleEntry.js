import { useState } from 'react'

export default function ArticleEntry({ addArticle, cancelEntry }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('all')
  const [error, setError] = useState(null)

  function submit(e) {
    setError(null)
    e.preventDefault()
    if (!title.trim() || !body.trim()) {
      setError('Both the title and body must be supplied')
    } else {
      addArticle({ title, body, category })
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        Title
        <input value={title} onChange={e => setTitle(e.target.value)} />
        Body
        <textarea rows="8" value={body} onChange={e => setBody(e.target.value)}></textarea>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="recipes">Recipes</option>
          <option value="lifestyle">Lifestyle</option>
        </select>
        <button type="submit">Create</button>
        <button onClick={cancelEntry}>Cancel</button>
      </form>
    </div>
  )
}
