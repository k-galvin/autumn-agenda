import Nav from './Nav'
import ArticleContent from './ArticleContent'

export default function Article({
  article,
  currentArticleIndex,
  articles,
  setArticle,
  deleteArticle,
  setReading,
  setWriting,
  loading,
  setCurrentArticleIndex
}) {
  return (
    <article>
      <Nav articles={articles} setArticle={setArticle} setReading={setReading} loading={loading} />

      <ArticleContent
        className="article-content"
        article={article}
        currentArticleIndex={currentArticleIndex}
        articles={articles}
        setReading={setReading}
        deleteArticle={deleteArticle}
        setWriting={setWriting}
        loading={loading}
        setArticle={setArticle}
        setCurrentArticleIndex={setCurrentArticleIndex}
      />
    </article>
  )
}
