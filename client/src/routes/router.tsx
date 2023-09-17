import {createBrowserRouter} from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Layout from '../layout/Layout'
import Shop from '../pages/Shop'
export const routers = createBrowserRouter([
    {
        path: "*",
        element: <ErrorPage />
    },
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Shop />
            }
        ]
    }
])