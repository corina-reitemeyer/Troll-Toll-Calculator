import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getSingleBridge } from '../apis/bridge'
import { useNavigate } from 'react-router-dom'
import Calculator from '../components/Calculator'

//import BridgeImage from "./BridgeImage"

//import { getSingleBridge } from "../../server/db/bridge"

function SingleBridgeView() {
  const { name } = useParams()
  const navigate = useNavigate()
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
      <div className="flex">
        <ul className="content">
          <li>
            <strong>Location: </strong>
            {bridges.location}
          </li>
          <li>
            <strong>Type: </strong>
            {bridges.type}
          </li>
          <li>
            <strong>Year built: </strong>
            {bridges.yearBuilt}
          </li>
          <li>
            <strong>Length: </strong>
            {bridges.lengthMeters}m
          </li>
          {bridges.lanes == null ? null : <li>Lanes: {bridges.lanes}</li>}
        </ul>

        <img src={bridges.image} alt="bridge name" />
      </div>
      <Calculator bridgeID={bridges.id} bridgeName={bridges.name} />
      <div>
        <button className="button-text" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </>
  )
}

export default SingleBridgeView
