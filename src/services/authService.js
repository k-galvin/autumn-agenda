import { useState, useEffect } from 'react'
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'

export function SignIn() {
  return (
    <div className="sign-in">
      <button className="login-button" onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}>
        Sign In
      </button>
    </div>
  )
}

export function SignOut() {
  return (
    <div className="sign-in">
      Hello, {auth.currentUser.displayName} &nbsp;
      <button className="login-button" onClick={() => signOut(auth)}>
        Sign Out
      </button>
    </div>
  )
}

export function useAuthentication() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      user ? setUser(user) : setUser(null)
    })
  }, [])
  return user
}
