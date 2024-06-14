import db from './connection'
import { Bridge } from '../../models/bridge'

export async function getActiveBridges(): Promise<Bridge[]> {
  return db('bridges').select('*')
}

export async function updateActiveBridge(
  id: number,
  active_user_id: number,
): Promise<void> {
  await db('bridges').where({ id }).update({ active_user_id })
}

export async function resetActiveBridge(id: number): Promise<void> {
  await db('bridges').where({ id }).update({ active_user_id: null })
}
