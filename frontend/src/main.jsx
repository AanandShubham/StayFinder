import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ListingContextProvider } from './context/ListingContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ListingContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ListingContextProvider>
    </BrowserRouter>
    <Toaster
      position="bottom-center"
      reverseOrder={false}
    />
  </StrictMode>,
)
