import express from 'express'
import * as Path from 'node:path'

import bridgeRoutes from './routes/bridge'
import favBridgeRoutes from './routes/favBridge'
import activeBridgeRoutes from './routes/activeBridge'
const server = express()

server.use(express.json())

server.use('/api/v1/bridges', bridgeRoutes)
server.use('/api/v1/favBridges', favBridgeRoutes)
server.use('/api/v1/activeBridges', activeBridgeRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
