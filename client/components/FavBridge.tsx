import { useState } from 'react'
import { FavBridge } from '../../models/favBridge'
import useAddFavBridge from '../hooks/use-add-favBridge'
import useDeleteFavBridge from '../hooks/use-delete-favBridge'

function ChangeFavorite({
  bridgeId,
  userId,
}: {
  bridgeId: number
  userId: number
}) {
  const [clicked, setClicked] = useState(false)
  const [favBridgeId, setFavBridgeId] = useState<number | null>(null)

  const addFavBridge = useAddFavBridge()
  const deleteFavBridge = useDeleteFavBridge()

  const handleAdd = () => {
    if (!clicked) {
      const newFavBridge: Omit<FavBridge, 'id'> = {
        user_id: userId,
        bridges_id: bridgeId,
      }
      console.log('Adding new favorite bridge:', newFavBridge)
      addFavBridge.mutate(newFavBridge, {
        onSuccess: (data) => {
          if (data && data.id) {
            setFavBridgeId(data.id)
            setClicked(true)
          } else {
            throw new Error()
          }
        },
      })
    } else if (favBridgeId !== null) {
      const deleteData: Omit<FavBridge, 'id'> = {
        bridges_id: bridgeId,
        user_id: userId,
      }
      deleteFavBridge.mutate(deleteData, {
        onSuccess: () => {
          setClicked(false)
          setFavBridgeId(null)
        },
        onError: (error) => {
          console.error('Error deleting favorite bridge:', error)
        },
      })
    }
  }

  return (
    <button onClick={handleAdd}>
      {clicked ? 'Delete Favorite Bridge' : 'Add Favorite Bridge'}
    </button>
  )
}

export default ChangeFavorite
