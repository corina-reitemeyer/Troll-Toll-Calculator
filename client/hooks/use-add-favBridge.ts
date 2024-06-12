import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

interface FavBridgeAdd {
  user_id: number
  bridges_id: number
}

export default function useAddFavBridge() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: FavBridgeAdd) => {
      const response = await request.post('/api/v1/favBridges').send(data)
      console.log('Response from addFavBridge:', response.body)
      return response.body
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bridge'] })
    },
  })
}
