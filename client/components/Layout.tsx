import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'

export default function Layout() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
