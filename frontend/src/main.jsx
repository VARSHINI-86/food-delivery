import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <GoogleOAuthProvider clientId="548555480029-1g0ii7qvec5ml5009d1fqk9t9un0csru.apps.googleusercontent.com">
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </GoogleOAuthProvider>
  </BrowserRouter>
)
