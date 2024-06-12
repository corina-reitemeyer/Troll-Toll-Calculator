import Bridges from './Bridges'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold underline">Troll Toll Calculator</h1>
        <Outlet />
      </div>
    </>
  )
}

export default App
