import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getSingleBridge } from '../apis/bridge'
import Calculator from '../components/Calculator'
//import { getSingleBridge } from "../../server/db/bridge"

function SingleBridgeView() {
  const { name } = useParams()
  const {
    data: bridges,
    error,
    isLoading,
  } = useQuery({
    queryKey: [name],
    queryFn: () => getSingleBridge(name as string),
  })

  if (error) {
    return <p>Nothing about this bridge bro</p>
  }
  if (!bridges || isLoading) {
    return <p>Fetching bridges from auckland...</p>
  }

  return (
    <>
      <h1>{name}</h1>
      <br></br>
      <ul>
        <li>
          <strong>Location:</strong> {bridges.location}
        </li>
        <li>
          <strong>Type:</strong> {bridges.type}
        </li>
        <li>
          <strong>Year built:</strong> {bridges.yearBuilt}
        </li>
        <li>
          <strong>Length:</strong> {bridges.lengthMeters}m
        </li>
        {bridges.lanes == null ? null : (
          <li>
            <strong>Lanes:</strong> {bridges.lanes}
          </li>
        )}
      </ul>
      <Calculator bridgeID={bridges.id} bridgeName={bridges.name} />
    </>
  )
}

export default SingleBridgeView
