export default function Article({ article }) {
  let listItems = ''

  if (article) {
    const lines = article.body.split('\n')

    // Map over the array of lines to create a list of React elements
    listItems = lines.map((line, index) => <li key={index}>{line}</li>)
  }

  return (
    <article>
      {!article ? (
        <p>
          Welcome to Autumn Agenda!
          <br />
          Select a post to get started.
        </p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="date">{`Posted: ${article.date.toDate().toString().slice(0, 10)}`}</p>
          <p className="body">{listItems}</p>
        </section>
      )}
    </article>
  )
}
