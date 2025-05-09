import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProviderContext from './contextapi/ProviderContext.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ProviderContext>
    <App />
    </ProviderContext>
  </StrictMode>,
)
