import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Route from './router/Route.jsx'
import DataProvider from './Context/DataContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <Route />
    </DataProvider>
  </StrictMode>,
)
