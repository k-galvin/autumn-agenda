import { SignIn, SignOut } from '../services/authService'

export default function Header({ closeArticle, selectCategory, deleteArticle, user, article }) {
  return (
    <header>
      <span onClick={closeArticle} style={{ cursor: 'pointer' }}>
        AUTUMN AGENDA
      </span>
      <span onClick={() => selectCategory('recipes')} style={{ cursor: 'pointer' }}>
        Recipes
      </span>
      <span onClick={() => selectCategory('lifestyle')} style={{ cursor: 'pointer' }}>
        Lifestyle
      </span>
      <span onClick={() => selectCategory('all')} style={{ cursor: 'pointer' }}>
        All Articles
      </span>
      {user && article && (
        <button className="header-button" onClick={deleteArticle}>
          Delete Article
        </button>
      )}
      {!user ? <SignIn /> : <SignOut />}
    </header>
  )
}
