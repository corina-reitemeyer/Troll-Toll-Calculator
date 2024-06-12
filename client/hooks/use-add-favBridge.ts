import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { FavBridge } from '../../models/favBridge'

export default function useAddFavBridge() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: Omit<FavBridge, 'id'>) => {
      const response = await request.post('/api/v1/favBridges').send(data)
      return response.body
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bridge'] })
    },
  })
}
