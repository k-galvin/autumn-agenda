import { useState } from 'react'

export default function ArticleEntry({ addArticle, cancelEntry }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('all')
  const [file, setFile] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [error, setError] = useState(null)

  function submit(e) {
    setError(null)
    e.preventDefault()
    if (!title.trim() || !body.trim()) {
      setError('Both the title and body must be supplied')
    } else {
      addArticle({ title, body, category, file, imageUrl })
    }
  }

  function handleFileChange(e) {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile)
      setImageUrl(imageUrl)
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
        <input type="file" onChange={handleFileChange} />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="recipes">Recipes</option>
          <option value="lifestyle">Lifestyle</option>
        </select>
        {imageUrl && <img src={imageUrl} alt="blog-img" />}
        <button type="submit">Create</button>
        <button onClick={cancelEntry}>Cancel</button>
      </form>
    </div>
  )
}
