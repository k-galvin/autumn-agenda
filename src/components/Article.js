import Nav from './Nav'
import ArticleContent from './ArticleContent'

export default function Article({
  article,
  navigateToNextArticle,
  navigateToPreviousArticle,
  currentArticleIndex,
  articles,
  setArticle,
  deleteArticle,
  setReading,
  setWriting,
  loading
}) {
  return (
    <article>
      <Nav articles={articles} setArticle={setArticle} setReading={setReading} loading={loading} />

      <ArticleContent
        className="article-content"
        article={article}
        navigateToNextArticle={navigateToNextArticle}
        navigateToPreviousArticle={navigateToPreviousArticle}
        currentArticleIndex={currentArticleIndex}
        articles={articles}
        setReading={setReading}
        deleteArticle={deleteArticle}
        setWriting={setWriting}
        loading={loading}
      />
    </article>
  )
}
