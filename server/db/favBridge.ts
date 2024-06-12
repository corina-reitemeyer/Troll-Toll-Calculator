import db from './connection'
import { FavBridge } from '../../models/favBridge'

// write function to add favourite bridge - POST
// where user_id and bridges_id
// return 202 message
export async function addFavBridge(
  favBridge: Omit<FavBridge, 'id'>,
): Promise<FavBridge> {
  try {
    const [insertedBridge] = await db('favBridges')
      .insert(favBridge)
      .returning('*') // This returns the entire inserted row
    return insertedBridge
  } catch (error) {
    console.error(`Error adding favorite bridge: ${error}`)
    throw error
  }
}

// write function to remove favourite bridges - POST
// where user_id / bridges_id?
export async function delFavBridge(user_id: number, bridges_id: number) {
  try {
    await db('favBridges').where({ user_id, bridges_id }).del()
  } catch (error) {
    console.error(`Error deleting favorite bridge: ${error}`)
    throw error
  }
}
