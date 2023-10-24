import Nav from './Nav'
export default function LifestylePage({ articles, setArticle, setReading }) {
  return (
    <div className="topic-page">
      <Nav articles={articles} setArticle={setArticle} setReading={setReading} />
      <div className="topic-page-content">
        <h1>Lifestyle</h1>
        <h2>Select an article</h2>
      </div>
    </div>
  )
}
