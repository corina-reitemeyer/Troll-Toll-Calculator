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

// DEL 'api/v1/favBridges/:user_id/:bridges_id'

router.delete('/:id', async (req, res) => {
    const {user_id: userId, bridges_id: bridgesId} = Number(req.params.id)
    try {
        await db.delFavBridge(userId, bridgesId)
        res.sendStatus(200)
    } catch (error) {
        console.error(`Database error ${error}`)
        res.sendStatus(500)
    }
})

 export default router