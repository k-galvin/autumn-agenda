import Nav from './Nav'
export default function AllPage({ articles, setArticle, setReading }) {
  return (
    <div className="topic-page">
      <Nav articles={articles} setArticle={setArticle} setReading={setReading} />
      <div className="topic-page-content">
        <h1 className="topic-page-title">All Articles</h1>
        <h3 className="topic-page-body">Select an article from the nav bar</h3>
        <img className="topic-page-img" src="/tea.png"></img>
      </div>
    </div>
  )
}
