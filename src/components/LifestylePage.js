import Nav from './Nav'
import LoadingImage from './LoadingImage'
export default function LifestylePage({ articles, setArticle, setReading, setWriting, setCurrentArticleIndex }) {
  return (
    <div className="topic-page">
      {/* Nav Bar */}
      <Nav
        articles={articles}
        setArticle={setArticle}
        setReading={setReading}
        setCurrentArticleIndex={setCurrentArticleIndex}
      />
      <div className="topic-page-content">
        {/* Title */}
        <h1 className="topic-page-title">Lifestyle</h1>
        {/* Body */}
        <h3 className="topic-page-body">Select an article from the nav bar</h3>
        {/* Book Image */}
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
