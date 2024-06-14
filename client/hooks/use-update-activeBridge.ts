import { useMutation, useQueryClient } from "@tanstack/react-query"
import request from "superagent"
// import {Bridge} from "../../models/bridge"
// import { response } from "express"


export function useUpdateActiveBridge() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({ id }: { id: number }) => {
      const res = await request.put(`/api/v1/activeBridges/${id}`)
      // if (!res.body){
      //   throw Error
      // }
      return res.body
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bridges']})
    }

  })
}

export function useResetActiveBridge() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({ id }: { id: number }) => {
      const res = await request.delete(`/api/v1/activeBridges/${id}`)
      return res.body
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bridges']})
    }

  })
}