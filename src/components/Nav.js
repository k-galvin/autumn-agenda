export default function Nav({ articles, setArticle, setReading, loading }) {
  if (loading) {
    return (
      <div className="nav">
        <p>Loading...</p>
      </div>
    )
  }

  return loading ? (
    <div className="nav">
      <p>Loading...</p>
    </div>
  ) : (
    <nav className="nav">
      {!articles
        ? 'No articles'
        : articles.map(a => (
            <p className="nav-item" key={a.id} onClick={() => setArticle(a) & setReading(true)}>
              {a.title}
            </p>
          ))}
    </nav>
  )
}
