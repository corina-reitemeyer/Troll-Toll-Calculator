import express, { Request, Response, NextFunction } from 'express'
import * as db from '../db/activeBridge'

const router = express.Router()

interface AuthenticatedRequest extends Request {
  user?: {
    id: number
  }
}

const fakeAuthMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  req.user = { id: 1 }
  next()
}

router.use(fakeAuthMiddleware)

//GET route to persist state

router.get('/', async (req, res) => {
  try {
    const activeBridges = await db.getActiveBridges

    res.json(activeBridges)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.put('/:id', async (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id)
  const userId = Number(req.user?.id)

  const updatedBrdige = await db.updateActiveBridge(id, userId)
  res.send({ message: 'Bridge updated successfully.', bridge: updatedBrdige})

  }
)


router.delete('/:id', async (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id)

  const updatedBridge = await db.resetActiveBridge(id)
  res.send({ message: 'Bridge deleted successfully', bridge: updatedBridge})
})

export default router
