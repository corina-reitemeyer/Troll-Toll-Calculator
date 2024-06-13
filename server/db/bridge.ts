import db from './connection.ts'
import { Bridge } from '../../models/bridge.ts'

export async function getBridges(): Promise<Bridge[]> {
  return db('bridges').select('*')
}

export async function sendRevenue(newRevenue: number) {
  return db('tollAnalytics').insert(newRevenue)
}

export async function getSingleBridge(name: string): Promise<Bridge[]> {
  return db('bridges')
    .select(
      'id',
      'location',
      'type',
      'year_built as yearBuilt',
      'length_meters as lengthMeters',
      'lanes',
    )
    .where({ name })
    .first()
}
