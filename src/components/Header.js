import { SignIn, SignOut } from '../services/authService'

export default function Header({ setCategory, user, setReading }) {
  return (
    <header>
      <div className="header-links">
        <span
          className="header-item"
          onClick={() => {
            setCategory('none')
            setReading(false)
          }}
        >
          AUTUMN AGENDA
        </span>
        <span
          className="header-item"
          onClick={() => {
            setCategory('recipes')
            setReading(false)
          }}
        >
          Recipes
        </span>
        <span
          className="header-item"
          onClick={() => {
            setCategory('lifestyle')
            setReading(false)
          }}
        >
          Lifestyle
        </span>
        <span
          className="header-item"
          onClick={() => {
            setCategory('all')
            setReading(false)
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
