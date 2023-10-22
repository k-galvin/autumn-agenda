import CategorySelect from './CategorySelect.js'

export default function Nav({ articles, setArticle, category, handleCategoryChange }) {
  return (
    <nav>
      <CategorySelect category={category} handleCategoryChange={handleCategoryChange} />
      {!articles
        ? 'No articles'
        : articles.map(a => (
            <p key={a.id} onClick={() => setArticle(a)}>
              {a.title}
            </p>
          ))}
    </nav>
  )
}
