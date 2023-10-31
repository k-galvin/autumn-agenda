import { SignIn, SignOut } from '../services/authService'

export default function Header({ setCategory, user, setReading }) {
  return (
    <header>
      <div className="header-links">
        {/* Home Page Link */}
        <p
          className="header-item"
          onClick={() => {
            setCategory('none')
            setReading(false)
          }}
        >
          AUTUMN AGENDA
        </p>

        {/* Recipe Page Link */}
        <p
          className="header-item"
          onClick={() => {
            setCategory('recipes')
            setReading(false)
          }}
        >
          Recipes
        </p>

        {/* Lifestyle Page Link */}
        <p
          className="header-item"
          onClick={() => {
            setCategory('lifestyle')
            setReading(false)
          }}
        >
          Lifestyle
        </p>

        {/* All Articles Page Link */}
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

      {/* User name and Login/Signout */}
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
