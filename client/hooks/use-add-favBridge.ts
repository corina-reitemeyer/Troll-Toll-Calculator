import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { FavBridge } from '../../models/favBridge'

export default function useAddFavBridge() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: Omit<FavBridge, 'id'>) => {
      try {
        const response = await request.post('/api/v1/favBridges').send(data)
        if (!response.body || !response.body.id) {
          throw new Error('Invalid response from server')
        }
        return response.body
      } catch (error) {
        console.error('Error in addFavBridge mutationFn:', error)
        throw error
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bridge'] })
    },
  })
}
