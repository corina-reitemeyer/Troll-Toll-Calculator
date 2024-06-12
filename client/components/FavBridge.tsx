import { useState } from 'react'
import { FavBridge } from '../../models/favBridge'
// Use custom hook to make changes to the databases
import useAddFavBridge from '../hooks/use-add-favBridge'
import useDeleteFavBridge from '../hooks/use-add-favBridge'
// write function to handle the change state
function ChangeFavorite() {
  const [clicked, setClicked] = useState(false)
  const [bridgeId, setBridgeId] = useState<number | null>(null)

  const addFavBridge = useAddFavBridge()
  const deleteFavBridge = useDeleteFavBridge()

  const handleButtonClick = () => {
    if (!clicked) {
      const newFavBridge: Omit<FavBridge, 'id'> = {
        user_id: 123,
        bridges_id: 123,
      }
      addFavBridge.mutate(newFavBridge, {
        onSuccess: (data) => {
          setBridgeId(data.id)
          setClicked(true)
        },
      })
    } else if (bridgeId !== null) {
      deleteFavBridge.mutate(bridgeId, {
        onSuccess: () => {
          setClicked(false)
          setBridgeId(null)
        },
      })
    }
  }
  return (
    <button onClick={handleButtonClick}>
      {clicked ? 'Delete Favorite Bridge' : 'Add Favorite Bridge'}
    </button>
  )
}

export default ChangeFavorite

// Write function that sets css
//return html keeping in mind the html semantics
//communicate with list team
//integrate auth
