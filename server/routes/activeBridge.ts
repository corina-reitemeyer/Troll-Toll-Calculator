import express, { Request, Response, NextFunction } from 'express'
import * as db from '../db/activeBridge'
import Bridges from '../../client/components/Bridges'

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

// // PATCH route to update or reset added_by_user_id and active_user_id
// router.patch('/:id', async (req: AuthenticatedRequest, res: Response) => {
//   const id = Number(req.params.id)
//   const action = req.body.action
//   const userId = req.user?.id

//   if (!userId) {
//     return res.status(400).send({ message: 'User ID is required' })
//   }

//   try {
//     let updatedBridge

//     if (action === 'update') {
//       updatedBridge = await db.updateActiveBridge(id, userId) //change to put request
//     } else if (action === 'reset') {
//       updatedBridge = await db.resetActiveBridge(id) //change to delete request
//     } else {
//       return res.status(400).send({ message: 'Invalid action specified' })
//     }

//     res.send({
//       message: 'Bridge updated successfully.',
//       bridge: updatedBridge,
//     })
//   } catch (error) {
//     res.status(500).send({ message: 'Error updating bridge.', error })
//   }
// })


router.put('/:id', async (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id)
  const userId = req.user?.id

  const updatedBrdige = await db.updateActiveBridge(id, userId)
  res.send({ message: 'Bridge updated successfully.', bridge: updatedBrdige})

  }
)


router.delete('/:id', async (req: AuthenticatedRequest, res: Response) => {
  const id = Number(req.params.id)
  const userId = req.user?.id

  const updatedBridge = await db.resetActiveBridge(id, userId)
  res.send({ message: 'Bridge deleted successfully', bridge: updatedBridge})
})

export default router
