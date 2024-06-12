//hook to fetch favBridge api and post 

import {useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { FavBridge } from '../../models/favBridge.ts'

export default function useAddFavBridge() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: FavBridge) => {
      await request.post('/api/v1/favbridges').send(data)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({queryKey: ['bridge']})
    }
  })

}