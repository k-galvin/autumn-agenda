import Nav from './Nav'
export default function RecipePage({ articles, setArticle, setReading }) {
  return (
    <div className="topic-page">
      <Nav articles={articles} setArticle={setArticle} setReading={setReading} />
      <h1>Recipes</h1>
      <h2>Select an article</h2>
    </div>
  )
}
