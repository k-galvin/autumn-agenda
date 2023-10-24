import { SignIn, SignOut } from '../services/authService'

export default function Header({ setCategory, user, setReading }) {
  return (
    <header>
      <span
        onClick={() => {
          setCategory('none')
          setReading(false)
        }}
      >
        AUTUMN AGENDA
      </span>
      <span
        onClick={() => {
          setCategory('recipes')
          setReading(false)
        }}
      >
        Recipes
      </span>
      <span
        onClick={() => {
          setCategory('lifestyle')
          setReading(false)
        }}
      >
        Lifestyle
      </span>
      <span
        onClick={() => {
          setCategory('all')
          setReading(false)
        }}
      >
        All Articles
      </span>
      {!user ? <SignIn /> : <SignOut />}
    </header>
  )
}
