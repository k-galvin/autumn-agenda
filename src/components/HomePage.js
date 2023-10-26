export default function HomePage({ articles, setArticle, setReading, setCurrentPage, imagesLoaded, handleImagesLoad }) {
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
          : articles.slice(0, 3).map(a => (
              <span
                className="home-element-inner"
                key={a.id}
                onClick={() => setArticle(a) & setReading(true) & setCurrentPage('all')}
              >
                {a.title}
              </span>
            ))}
      </div>
      <img className="home-img falling-leaf" src="/fall-leaf.png" alt="fall leaf" onLoad={handleImagesLoad}></img>
    </div>
  )
}
