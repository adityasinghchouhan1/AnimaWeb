import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login'
import Dashboard from '../components/Dashboard'
import Sidebar from '../components/Sidebar'
import ForgotPassword from '../pages/ForgotPassword'
import ContectusData from '../components/ContectusData'
import SidebarSub from '../components/SidebarSub'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'forgotpassword',
        element: <ForgotPassword />,
      },
      {
        path: 'dashboard',
        element: <Sidebar />,
        children: [
          {
            path: 'dashboardCards',
            element: <Dashboard />,
          },
          {
            path: 'contect',
            element: <ContectusData />,
          },
        ],
      },
      {
        path: 'dashboardSub',
        element: <SidebarSub />,
        children: [
          {
            path: 'dashboardCards',
            element: <Dashboard />,
          },
          {
            path: 'contect',
            element: <ContectusData />,
          },
        ],
      },
    ],
  },
])
