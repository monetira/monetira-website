import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import "@fontsource/merriweather/700.css"
import "@fontsource/merriweather/900.css"
import "@fontsource/source-sans-3/400.css"
import "@fontsource/source-sans-3/600.css"
import "@fontsource/source-sans-3/700.css"
import App from './App'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {import.meta.env.VITE_PREVIEW_FILE === '1' ? (
      // Local single-file preview only (opened by double-click, no server)
      <HashRouter>
        <App />
      </HashRouter>
    ) : (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    )}
  </StrictMode>,
)
