import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Component/Home'
import ContectUs from '../Component/ContectUs'
import About from '../Component/About'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'contect',
        element: <ContectUs />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])

export default router
