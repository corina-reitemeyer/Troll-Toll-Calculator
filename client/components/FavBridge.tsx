import { useState, useEffect } from 'react'
import { FavBridge } from '../../models/favBridge'
import useAddFavBridge from '../hooks/use-add-favBridge'
import useDeleteFavBridge from '../hooks/use-delete-favBridge'

function ChangeFavorite({ bridgeId, userId }) {
  const [clicked, setClicked] = useState(false)
  const [favBridgeId, setFavBridgeId] = useState<number | null>(null)

  const addFavBridge = useAddFavBridge()
  const deleteFavBridge = useDeleteFavBridge()

  useEffect(() => {
    console.log('Initial clicked:', clicked)
    console.log('Initial favBridgeId:', favBridgeId)
  }, [])

  useEffect(() => {
    console.log('Updated clicked:', clicked)
    console.log('Updated favBridgeId:', favBridgeId)
  }, [clicked, favBridgeId])

  const handleAdd = () => {
    if (!clicked) {
      const newFavBridge: Omit<FavBridge, 'id'> = {
        user_id: userId,
        bridges_id: bridgeId,
      }
      console.log('Adding new favorite bridge:', newFavBridge)
      addFavBridge.mutate(newFavBridge, {
        onSuccess: (data) => {
          console.log('Add success:', data)
          if (data && data.id) {
            setFavBridgeId(data.id)
            setClicked(true)
          } else {
            console.error('Invalid data returned on add:', data)
          }
        },
        onError: (error) => {
          console.error('Error adding favorite bridge:', error)
        },
      })
    } else if (favBridgeId !== null) {
      const deleteData: Omit<FavBridge, 'id'> = {
        bridges_id: bridgeId,
        user_id: userId,
      }
      console.log('Deleting favorite bridge:', deleteData)
      deleteFavBridge.mutate(deleteData, {
        onSuccess: (data) => {
          console.log('Delete success:', data)
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
