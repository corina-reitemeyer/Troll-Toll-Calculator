import express from 'express'

import { JwtRequest } from '../auth0.ts'

import * as db from '../db/bridge.ts'

const router = express.Router()

// GET /api/v1/bridges
router.get('/', async (req, res) => {
  try {
    const bridges = await db.getBridges()

    res.json(bridges)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.get('/:name', async (req, res, next) => {
  try {
    const name = req.params.name
    const bridge = await db.getSingleBridge(name)
    res.json(bridge)
  } catch (e) {
    next(e)
  }
})

export default router
