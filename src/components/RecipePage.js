import Nav from './Nav'
import LoadingImage from './LoadingImage'
export default function RecipePage({ articles, setArticle, setReading }) {
  return (
    <div className="topic-page">
      <Nav articles={articles} setArticle={setArticle} setReading={setReading} />
      <div className="topic-page-content">
        <h1 className="topic-page-title">Recipes</h1>
        <h3 className="topic-page-body">Select an article from the nav bar</h3>
        <LoadingImage
          containerClassName={'topic-page-img-container'}
          imgClassName={'topic-page-img'}
          src="/apple-pie.png"
          alt="apple-pie"
        />
      </div>
    </div>
  )
}
