import Nav from './Nav'
import LoadingImage from './LoadingImage'
export default function LifestylePage({ articles, setArticle, setReading, setWriting }) {
  return (
    <div className="topic-page">
      <Nav articles={articles} setArticle={setArticle} setReading={setReading} />
      <div className="topic-page-content">
        <h1 className="topic-page-title">Lifestyle</h1>
        <h3 className="topic-page-body">Select an article from the nav bar</h3>
        <LoadingImage
          containerClassName={'topic-page-img-container'}
          imgClassName={'topic-page-img'}
          src="/book.png"
          alt="book"
        />
        {/* Create Article Buttons */}
        <button className="create-button" onClick={() => setWriting(true)}>
          New Article
        </button>
      </div>
    </div>
  )
}
