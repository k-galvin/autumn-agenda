export default function Nav({ articles, setArticle, category }) {
  const filteredArticles = articles.filter(article => category === 'all' || article.category === category)

  return (
    <nav>
      {!filteredArticles.length
        ? 'No articles'
        : filteredArticles.map(a => (
            <p key={a.id} onClick={() => setArticle(a)}>
              {a.title}
            </p>
          ))}
    </nav>
  )
}
