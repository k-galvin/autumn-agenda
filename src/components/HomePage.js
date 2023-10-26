export default function HomePage({ articles, setArticle, setReading, setCurrentPage, imagesLoaded, handleImagesLoad }) {
  return (
    <div className="home">
      <h1 className="home-title">Welcome to Autumn Agenda!</h1>
      <h2 className="home-body">Check out some of our most recent articles:</h2>
      <div className="home-links">
        {!articles
          ? 'No articles'
          : articles.slice(0, 3).map(a => (
              <p key={a.id} onClick={() => setArticle(a) & setReading(true) & setCurrentPage('all')}>
                {a.title}
              </p>
            ))}
      </div>
      <img className="home-img falling-leaf" src="/fall-leaf.png" alt="fall leaf" onLoad={handleImagesLoad}></img>
    </div>
  )
}
