export interface Bridge {
  id: number
  name: string
  location: string
  type: string
  yearBuilt: number
  lengthMeters: string
  lanes?: number | null
  addedByUser: string
}

export interface tollAnalytics {
  id: number
  bridge_id: number
  timestamp: Date
  revenue: number
}
