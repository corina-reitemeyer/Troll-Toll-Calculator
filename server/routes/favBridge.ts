import express from 'express'
import * as db from '../../server/db/favBridge'

const router = express.Router()

// POST 'api/v1/favBridges/'

router.post('/', async (req, res) => {
  const id = req.body
  try {
    await db.addFavBridge(id)
    res.sendStatus(202)
  } catch (error) {
    console.error(`Database error ${error}`)
    res.sendStatus(505)
  }
})

// DEL 'api/v1/favBridges/:id (where the id refers to the bridge id)

router.delete('/:id', async (req, res) => {
  // const {user_id: userId, bridges_id: bridgesId} = Number(req.params.id)
  const bridgesId = Number(req.params.id)
  const { user_id } = req.body
  try {
    await db.delFavBridge(user_id, bridgesId)
    res.sendStatus(200)
  } catch (error) {
    console.error(`Database error ${error}`)
    res.sendStatus(500)
  }
})

export default router
