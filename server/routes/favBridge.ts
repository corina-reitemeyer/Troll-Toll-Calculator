import express from 'express'
import * as db from '../../server/db/favBridge'

const router = express.Router()

// POST 'api/v1/favBridges/'
router.post('/', async (req, res) => {
  const newFavBridge = req.body
  try {
    const addedBridge = await db.addFavBridge(newFavBridge)
    res.status(202).json(addedBridge) // Return the added favorite bridge
  } catch (error) {
    console.error(`Database error ${error}`)
    res.status(500).json({ error: error.message }) // Send the error message
  }
})

// DEL 'api/v1/favBridges/:id' (where the id refers to the bridge id)
router.delete('/:id', async (req, res) => {
  const bridgesId = Number(req.params.id)
  const { user_id } = req.body
  try {
    await db.delFavBridge(user_id, bridgesId)
    res.sendStatus(200)
  } catch (error) {
    console.error(`Database error ${error}`)
    res.status(500).json({ error: error.message }) // Send the error message
  }
})

export default router
