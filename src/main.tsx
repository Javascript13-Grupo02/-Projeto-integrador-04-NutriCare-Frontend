import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Equipe from './pages/equipe/Equipe.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'equipe', element: <Equipe /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
