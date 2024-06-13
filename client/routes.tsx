import { createRoutesFromElements, Route } from 'react-router-dom'
import Bridges from './pages/Bridges.tsx'
import SingleBridgeView from './pages/SingleBridgeView.tsx'
import Layout from './components/Layout.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Bridges />} />
    <Route path="bridge/:name" element={<SingleBridgeView />} />
  </Route>,
)
