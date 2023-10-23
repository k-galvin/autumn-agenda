export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <p>
          Welcome to Autumn Agenda!
          <br />
          Select a post to get started.
        </p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          {article.category !== 'all' ? <p>{article.category}</p> : ''}
          <p className="date">{`Posted: ${article.date.toDate().toString().slice(0, 10)}`}</p>
          <p className="body">{article.body}</p>
          {article.imageUrl && <img src={article.imageUrl} alt="blog-img" />}
        </section>
      )}
    </article>
  )
}
