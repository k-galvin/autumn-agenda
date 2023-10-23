import Nav from './Nav'

export default function Article({
  article,
  navigateToNextArticle,
  navigateToPreviousArticle,
  currentArticleIndex,
  articles,
  setArticle,
  setReading
}) {
  return (
    <article>
      <section>
        <Nav articles={articles} setArticle={setArticle} setReading={setReading} />
        <h2>{article.title}</h2>
        {article.category !== 'all' ? <p>{article.category}</p> : ''}
        <p className="date">{`Posted: ${article.date.toDate().toString().slice(0, 10)}`}</p>
        <div className="article-body">
          <button
            className="material-icon-button"
            onClick={navigateToPreviousArticle}
            disabled={currentArticleIndex === 0}
          >
            <i className="material-icons">chevron_left</i>
          </button>
          <p className="body">{article.body}</p>
          <button
            className="material-icon-button"
            onClick={navigateToNextArticle}
            disabled={currentArticleIndex === articles.length - 1}
          >
            <i className="material-icons">chevron_right</i>
          </button>
        </div>
        {article.imageUrl && <img src={article.imageUrl} alt="blog-img" />}
      </section>
    </article>
  )
}
