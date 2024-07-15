import LandingPage from "../pages/LandingPage/LandingPage"
import ErrorPage from "../components/ErrorPage/ErrorPage"
import Header from "../components/Header/Header"
import MainLayout from "../layout/MainLayout/MainLayout"

/**
 * The router array using in RouterProvider component
 * @type {Array}
 */
const routes = [
    {
        path: '/',
        element: (
            <MainLayout>
                <LandingPage />
            </MainLayout>
        ),
        errorElement: <ErrorPage />
    }
]

export default routes