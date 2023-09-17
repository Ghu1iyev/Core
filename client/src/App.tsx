import {RouterProvider} from 'react-router-dom'
import { routers } from './routes/router'
const App = () => {
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  )
}

export default App