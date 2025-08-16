import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ListingContextPovider } from './context/ListingContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ListingContextPovider>
          <App />
        </ListingContextPovider>
      </AuthContextProvider>
    </BrowserRouter>
    <Toaster
      position="bottom-center"
      reverseOrder={false}
    />
  </StrictMode>,
)
