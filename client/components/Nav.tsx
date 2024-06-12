import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

function Nav() {
  const { logout, loginWithRedirect, user } = useAuth0()

  const handleSignOut = () => {
    logout()
    console.log('sign out')
  }

  const handleSignIn = () => {
    loginWithRedirect()
    console.log(user)
    console.log('sign in')
  }

  return (
    <>
      <IfAuthenticated>
        <button onClick={handleSignOut}>Sign out</button>
        <p>The user is logged in</p>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <p>The user is NOT logged in !!!!!!</p>
        <button onClick={handleSignIn}>Please sign in here</button>
      </IfNotAuthenticated>
    </>
  )
}

export default Nav
