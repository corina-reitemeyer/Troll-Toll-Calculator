import { useState } from 'react'
import request from 'superagent'
import { Bridge } from '../../models/bridge'

export const UpdateActiveBridge = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | Error>(null)
  const [bridge, setBridge] = useState<null | Bridge>(null)

  const updateActiveBridge = async (id: number, action: 'update' | 'reset') => {
    setLoading(true)
    setError(null)

    try {
      const response = await request
        .patch(`https://localhost:3000/api/v1/activeBridge/${id}`)
        .send({ action })

      setBridge(response.body.bridge)
    } catch (err) {
      throw Error
    } finally {
      setLoading(false)
    }
  }

  return { bridge, loading, error, updateActiveBridge }
}
