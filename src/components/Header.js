import { SignIn, SignOut } from '../services/authService'

export default function Header({ setCategory, user, setReading, setCurrentPage }) {
  return (
    <header>
      <div className="header-links">
        <span
          className="header-item"
          onClick={() => {
            setCategory('all')
            setReading(false)
            setCurrentPage('home')
          }}
        >
          AUTUMN AGENDA
        </span>
        <span
          className="header-item"
          onClick={() => {
            setCategory('recipes')
            setReading(false)
            setCurrentPage('recipes')
          }}
        >
          Recipes
        </span>
        <span
          className="header-item"
          onClick={() => {
            setCategory('lifestyle')
            setReading(false)
            setCurrentPage('lifestyle')
          }}
        >
          Lifestyle
        </span>
        <span
          className="header-item"
          onClick={() => {
            setCategory('all')
            setReading(false)
            setCurrentPage('all')
          }}
        >
          All Articles
        </span>
      </div>
      {!user ? (
        <div className="header-sign-in-button">
          <SignIn />
        </div>
      ) : (
        <div className="header-sign-in-button">
          <SignOut />
        </div>
      )}
    </header>
  )
}
