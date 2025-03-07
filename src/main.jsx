import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Auth0Provider
    domain="dev-wtrlzjprq2dtcsdo.us.auth0.com"
    clientId="7aYprdqlvoq2AuH4dxu7p7ZLCWw4BwwZ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  // </StrictMode>,
)
