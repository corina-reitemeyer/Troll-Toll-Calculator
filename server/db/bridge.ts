import db from './connection.ts'
import { Bridge } from '../../models/bridge.ts'

export async function getBridges(): Promise<Bridge[]> {
  return db('bridges').select('*')
}

export async function sendRevenue(newRevenue: number) {
  return db('tollAnalytics').insert(newRevenue)
}
