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
        <img className="placeholder-banner-icon" src='img-url' alt='troll logo' />
        <h2>TROLLTOLL PATROL</h2>
        <div className="placeholder-menu-button">
          <Link to={``}>Bridges</Link>
        </div>

        <IfAuthenticated>
          <button onClick={handleSignOut}>Sign out</button>

          {/* render username + hardcoded profile pic */}
          <img className="placeholder-profile-thumbnail" src='img-url' alt='active troll' />
          {user && <p>You are signed in as {user?.nickname}</p>}

  
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
