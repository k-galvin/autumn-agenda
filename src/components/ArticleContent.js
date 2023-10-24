export default function ArticleContent({
  article,
  navigateToNextArticle,
  navigateToPreviousArticle,
  currentArticleIndex,
  articles,
  setReading,
  deleteArticle,
  setWriting
}) {
  let articleLines = ''

  if (article) {
    const lines = article.body.split('\n')

    // Map over the array of lines to create a list of React elements
    articleLines = lines.map((line, index) => <p key={index}>{line}</p>)
  }

  return (
    <article-content>
      {/* Article Heading and Close Button */}
      <div className="top-row">
        {/* Article Heading */}
        <div className="article-heading">
          {/* Article Title */}
          <h2 className="row">{article.title}</h2>

          {/* Article Category */}
          {article.category !== 'all' ? <p className="row">{article.category}</p> : ''}

          {/* Date Posted */}
          <p className="row">{`Posted: ${article.date.toDate().toString().slice(0, 10)}`}</p>
        </div>
        {/* Close Article Button */}
        <button
          className="close-button material-icon-button"
          onClick={() => {
            setReading(false)
          }}
        >
          <i className="material-icons">close</i>
        </button>
      </div>

      <div className="article-body">
        {/* Article Image */}
        {article.imageUrl && <img className="article-image" src={article.imageUrl} alt="blog-img" />}
        {/* Previous Article Button */}
        <button
          className="back-button material-icon-button"
          onClick={navigateToPreviousArticle}
          disabled={currentArticleIndex === 0}
        >
          <i className="material-icons">chevron_left</i>
        </button>

        {/* Article Body */}
        <p className="article-text">{articleLines}</p>

        {/* Next Article Button */}
        <button
          className="next-button material-icon-button"
          onClick={navigateToNextArticle}
          disabled={currentArticleIndex === articles.length - 1}
        >
          <i className="material-icons">chevron_right</i>
        </button>
      </div>

      {/* Delete and Create Article Buttons */}
      <div className="buttons">
        <button onClick={deleteArticle}>Delete Article</button>
        <button onClick={() => setWriting(true)}>New Article</button>
      </div>
    </article-content>
  )
}
