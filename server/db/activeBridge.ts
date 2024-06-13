import db from './connection'
import { Bridge } from '../../models/bridge'

export async function updateActiveBridge(
  id: number,
  added_by_user_id: number,
  active_user_id: number,
): Promise<Bridge> {
  try {
    const [activeBridge] = await db('bridges')
      .where({ id })
      .update({ added_by_user_id, active_user_id })
      .returning('*')
    return activeBridge
  } catch (error) {
    console.error(`Error updating Active Bridge: ${error}`)
    throw error
  }
}

export async function resetActiveBridge(id: number): Promise<Bridge> {
  try {
    const [activeBridge] = await db('bridges')
      .where({ id })
      .update({ added_by_user_id: null, active_user_id: null })
      .returning('*')
    return activeBridge
  } catch (error) {
    console.error(`Error resetting Active Bridge: ${error}`)
    throw error
  }
}
