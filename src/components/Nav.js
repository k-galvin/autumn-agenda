export default function Nav({ articles, setArticle, setReading, setCurrentArticleIndex }) {
  return (
    <nav className="nav">
      {/* List of Articles */}
      {!articles || articles.length === 0
        ? 'No articles'
        : articles.map((a, index) => (
            <p
              key={a.id}
              onClick={() => {
                setArticle(a)
                setReading(true)
                setCurrentArticleIndex(index)
              }}
            >
              {a.title}
            </p>
          ))}
    </nav>
  )
}
