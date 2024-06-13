import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

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
    {/* trolltoll logo, home button, bridges button, calculator button */}
    {/* demo layout for the nav bar etc */}
      <div className="placeholder-nav-bar">

        <div className="placeholder-menu-button">
          <Link to={`/home`}>Home</Link>
        </div>
        <div className="placeholder-menu-button">
          <Link to={`/bridges`}>Bridges</Link>
        </div>

        <IfAuthenticated>
          <button onClick={handleSignOut}>Sign out</button>
          <p>The user is logged in</p>
          {/* render username + hardcoded profile pic */}
          <a href='profile-url'>
            <img className="placeholder-profile-thumbnail" src='img-url' alt='your profile image' />
          </a>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <p>The user is NOT logged in !!!!!!</p>
          <button onClick={handleSignIn}>Please sign in here</button>
        </IfNotAuthenticated>
      </div>
    </>
  )
}

export default Nav
