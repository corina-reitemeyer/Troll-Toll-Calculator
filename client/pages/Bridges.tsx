import { getBridges } from '../apis/bridge.ts'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

import ChangeFavorite from '../components/FavBridge.tsx'

const userId = 1 // Assuming a fixed user id for this example

export default function Bridges() {
  const {
    data: bridges,
    error,
    isLoading,
  } = useQuery({ queryKey: ['bridges'], queryFn: getBridges })

  if (error) {
    return <p>Your bridges are gone! What a massive error</p>
  }
  if (!bridges || isLoading) {
    return <p>Fetching bridges from auckland...</p>
  }

  return (
    <>
      <h1>Auckland Bridges🧌</h1>
      <div className="flex-row">
        <ul className="content">
          {bridges.map((br) => {
            return (
              <li key={br.name}>
                <Link to={`bridge/${br.name}`}>{br.name}</Link>
                <ChangeFavorite bridgeId={br.id} userId={userId} />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
