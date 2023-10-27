import LoadingImage from './LoadingImage'

export default function HomePage({ articles, setArticle, setReading, setCategory, setCurrentArticleIndex }) {
  return (
    <div className="home">
      <h1 className="home-title">
        <span className="home-element-inner">Welcome to Autumn Agenda!</span>
      </h1>
      <h2 className="home-body">
        <span className="home-element-inner">Check out some of our most recent articles:</span>
      </h2>
      <div className="home-links">
        {!articles
          ? 'No articles'
          : articles.slice(0, 3).map((a, i) => (
              <span
                className="home-element-inner"
                key={a.id}
                onClick={() => setArticle(a) & setReading(true) & setCategory('all') & setCurrentArticleIndex(i)}
              >
                {a.title}
              </span>
            ))}
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
