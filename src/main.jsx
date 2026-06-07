import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Gallery } from './Gallery.jsx'

// Lightweight routing: `?gallery` renders the component gallery (living docs
// for the starter kit) without pulling in a router dependency.
const isGallery = new URLSearchParams(window.location.search).has('gallery')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isGallery ? <Gallery /> : <App />}
  </StrictMode>,
)
