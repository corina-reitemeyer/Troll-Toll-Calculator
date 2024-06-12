import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import Bridges from './components/Bridges.tsx'
import SingleBridgeView from './components/SingleBridgeView.tsx'


export default createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index element={<Bridges />} />
            <Route path="bridge/:name" element={<SingleBridgeView />}/>

    </Route>)


