export default function Nav({ articles, setArticle, setReading }) {
  return (
    <nav className="nav">
      {!articles
        ? 'No articles'
        : articles.map(a => (
            <p key={a.id} onClick={() => setArticle(a) & setReading(true)}>
              {a.title}
            </p>
          ))}
    </nav>
  )
}
