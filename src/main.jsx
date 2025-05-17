import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TransferRecord from "./transferRecord.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TransferRecord />
  </StrictMode>,
)

