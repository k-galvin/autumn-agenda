import Nav from './Nav'
export default function AllPage({ articles, setArticle, setReading }) {
  return (
    <div className="topic-page">
      <Nav articles={articles} setArticle={setArticle} setReading={setReading} />
      <div className="topic-page-content">
        <h1>All Articles</h1>
        <h2>Select an article</h2>
      </div>
    </div>
  )
}
