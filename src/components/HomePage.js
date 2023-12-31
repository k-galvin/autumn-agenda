import LoadingImage from './LoadingImage'

export default function HomePage({ articles, setArticle, setReading, setCategory }) {
  return (
    <div className="home">
      {/* Title */}
      <h1 className="home-title">
        <p className="home-element-inner">Welcome to Autumn Agenda!</p>
      </h1>

      {/* Recent Article Link */}
      <h2 className="home-body">
        <p className="home-element-inner">Check out our most recent article:</p>
      </h2>
      <div className="home-links">
        {!articles || articles.length === 0 ? (
          <p className="home-element-inner">No articles</p>
        ) : (
          <p
            className="home-element-inner"
            onClick={() => {
              setArticle(articles[0])
              setReading(true)
              setCategory('all')
            }}
          >
            {articles[0].title}
          </p>
        )}
      </div>

      {/* Fall Leaf Image */}
      <LoadingImage
        containerClassName={'home-img-container'}
        imgClassName={'falling-leaf'}
        src="/fall-leaf.png"
        alt="fall leaf"
      />
    </div>
  )
}
