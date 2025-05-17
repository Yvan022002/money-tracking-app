import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import OverView from "./overView.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OverView />
  </StrictMode>,
)

