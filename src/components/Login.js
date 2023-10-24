import { SignIn } from '../services/authService'
export default function Login() {
  return (
    <div className="login">
      <h1 className="login-title">Welcome to Autumn Agenda!</h1>
      <h2 className="login-label">Login Here:</h2>
      <SignIn className="login-button" />
    </div>
  )
}
