import LandingPage from "../pages/LandingPage/LandingPage"
import ErrorPage from "../components/ErrorPage/ErrorPage"

/**
 * The router array using in RouterProvider component
 * @type {Array}
 */
const routes = [
    {
        path: '/',
        element: <LandingPage />,
        errorElement: <ErrorPage />
    }
]

export default routes