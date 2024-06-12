import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

export default function useDeleteFavBridge() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      await request.delete(`/api/v1/favBridges/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bridge'] })
    },
  })
}
