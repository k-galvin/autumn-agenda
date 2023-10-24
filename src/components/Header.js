import { SignIn, SignOut } from '../services/authService'

export default function Header({ setCategory, user, setReading }) {
  return (
    <header>
      <span
        onClick={() => {
          setCategory('none')
          setReading(false)
        }}
        style={{ cursor: 'pointer' }}
      >
        AUTUMN AGENDA
      </span>
      <span
        onClick={() => {
          setCategory('recipes')
          setReading(false)
        }}
        style={{ cursor: 'pointer' }}
      >
        Recipes
      </span>
      <span
        onClick={() => {
          setCategory('lifestyle')
          setReading(false)
        }}
        style={{ cursor: 'pointer' }}
      >
        Lifestyle
      </span>
      <span
        onClick={() => {
          setCategory('all')
          setReading(false)
        }}
        style={{ cursor: 'pointer' }}
      >
        All Articles
      </span>
      {!user ? <SignIn /> : <SignOut />}
    </header>
  )
}
