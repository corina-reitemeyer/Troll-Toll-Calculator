import Bridges from './Bridges'
import ChangeFavorite from './FavBridge'

function App() {
  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold underline">Troll Toll Calculator</h1>
        <Bridges />
        <ChangeFavorite />
      </div>
    </>
  )
}

export default App
