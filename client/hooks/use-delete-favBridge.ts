import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { FavBridge } from '../../models/favBridge'

export default function useDeleteFavBridge() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: Omit<FavBridge, 'id'>) => {
      const { bridges_id, user_id } = data
      await request.delete(`/api/v1/favBridges/${bridges_id}`).send({ user_id })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bridge'] })
    },
  })
}
