import { SignIn, SignOut } from '../services/authService'

export default function Header({ setCategory, user, setReading }) {
  return (
    <header>
      <div className="header-links">
        <p
          className="header-item"
          onClick={() => {
            setCategory('none')
            setReading(false)
          }}
        >
          AUTUMN AGENDA
        </p>
        <p
          className="header-item"
          onClick={() => {
            setCategory('recipes')
            setReading(false)
          }}
        >
          Recipes
        </p>
        <p
          className="header-item"
          onClick={() => {
            setCategory('lifestyle')
            setReading(false)
          }}
        >
          Lifestyle
        </p>
        <p
          className="header-item"
          onClick={() => {
            setCategory('all')
            setReading(false)
          }}
        >
          All Articles
        </p>
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
