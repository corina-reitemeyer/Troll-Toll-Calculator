import { useState } from 'react'
import { FavBridge } from '../../models/favBridge'
// Use custom hook to make changes to the databases
import useAddFavBridge from '../hooks/use-add-favBridge'
import useDeleteFavBridge from '../hooks/use-delete-favBridge'

function ChangeFavorite() {
  const [clicked, setClicked] = useState(false)
  const [bridgeId, setBridgeId] = useState<number | null>(null)

  const addFavBridge = useAddFavBridge()
  const deleteFavBridge = useDeleteFavBridge()

  const handleAdd = () => {
    if (!clicked) {
      const newFavBridge: Omit<FavBridge, 'id'> = {
        user_id: 1,
        bridges_id: 1,
      }
      addFavBridge.mutate(newFavBridge, {
        onSuccess: (data) => {
          setBridgeId(data.id)
          setClicked(true)
        },
      })
    } else if (bridgeId !== null) {
      const deleteData: Omit<FavBridge, 'id'> = {
        bridges_id: 1,
        user_id: 1,
      }
      deleteFavBridge.mutate(deleteData, {
        onSuccess: () => {
          setClicked(false)
          setBridgeId(null)
        },
      })
    }
  }

  return (
    <>
      <button onClick={handleAdd}>
        {clicked ? 'Delete Favorite Bridge' : 'Add Favorite Bridge'}
      </button>
    </>
  )
}

export default ChangeFavorite
