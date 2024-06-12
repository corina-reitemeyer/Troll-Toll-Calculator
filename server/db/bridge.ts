import db from './connection.ts'
import { Bridge } from '../../models/bridge.ts'

export async function getBridges(): Promise<Bridge[]> {
  return db('bridges').select('*')
}

export async function getSingleBridge(name: string): Promise<Bridge[]> {
  return db('bridges')
    .select('location', 'type', 'year_built', 'length_meters', 'lanes',)
    .where({ name })
    .first()
}
