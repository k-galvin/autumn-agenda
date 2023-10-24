import Nav from './Nav'

export default function Article({
  article,
  navigateToNextArticle,
  navigateToPreviousArticle,
  currentArticleIndex,
  articles,
  setArticle,
  deleteArticle,
  setReading,
  setWriting
}) {
  return (
    <article>
      <Nav articles={articles} setArticle={setArticle} setReading={setReading} />

      <div className="article-all">
        <div className="top-row">
          <div></div>
          <div className="article-title">
            <h2>{article.title}</h2>
            {article.category !== 'all' ? <p>{article.category}</p> : ''}
            <p className="date">{`Posted: ${article.date.toDate().toString().slice(0, 10)}`}</p>
          </div>

          <button
            className="close-button material-icon-button"
            onClick={() => {
              setReading(false)
            }}
          >
            <i className="material-icons">close</i>
          </button>
        </div>

        <div className="article-content">
          {article.imageUrl && <img className="article-image" src={article.imageUrl} alt="blog-img" />}
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
        </div>
      </div>

      <div className="buttons">
        <button className="delete-button" onClick={deleteArticle}>
          Delete Article
        </button>
        <button className="create-button" onClick={() => setWriting(true)}>
          New Article
        </button>
      </div>
    </article>
  )
}
