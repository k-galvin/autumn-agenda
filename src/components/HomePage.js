import LoadingImage from './LoadingImage'

export default function HomePage({ articles, setArticle, setReading, setCategory }) {
  return (
    <div className="home">
      <h1 className="home-title">
        <span className="home-element-inner">Welcome to Autumn Agenda!</span>
      </h1>
      <h2 className="home-body">
        <span className="home-element-inner">Check out our most recent article:</span>
      </h2>
      <div className="home-links">
        {!articles || articles.length == 0 ? (
          'No articles'
        ) : (
          <span
            className="home-element-inner"
            onClick={() => {
              setArticle(articles[0])
              setReading(true)
              setCategory('all')
            }}
          >
            {articles[0].title}
          </span>
        )}
      </div>
      <LoadingImage
        containerClassName={'home-img-container'}
        imgClassName={'falling-leaf'}
        src="/fall-leaf.png"
        alt="fall leaf"
      />
    </div>
  )
}
