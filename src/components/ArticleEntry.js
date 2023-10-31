import { useState } from 'react'

export default function ArticleEntry({ addArticle, setWriting }) {
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('all')
  const [error, setError] = useState(null)
  const [file, setFile] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [title, setTitle] = useState('')

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
    <div className="article-entry">
      {/* Close Entry Pop-up Button */}
      <button
        className="close-button material-icon-button"
        onClick={() => {
          setWriting(false)
        }}
      >
        <i className="material-icons">close</i>
      </button>
      {/* Form for submitting entered article */}
      <form onSubmit={submit}>
        {/* Error message that displays if not all required fields are supplied */}
        {error && <p className="error">{error}</p>}
        Title
        {/* Title Input */}
        <input value={title} onChange={e => setTitle(e.target.value)} />
        Body
        {/* Body Input */}
        <textarea rows="8" value={body} onChange={e => setBody(e.target.value)}></textarea>
        {/* Image Input */}
        <input type="file" onChange={handleFileChange} />
        {/* Category Input */}
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="recipes">Recipes</option>
          <option value="lifestyle">Lifestyle</option>
        </select>
        {/* Image Preview */}
        {imageUrl && <img className="article-entry-img" src={imageUrl} alt="blog-img" />}
        {/* Submit Button */}
        <button type="submit">Create</button>
      </form>
    </div>
  )
}
