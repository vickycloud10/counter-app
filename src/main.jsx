import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ToastContainer from './components/ToastContainer.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer>
      <App/>
    </ToastContainer>
  </React.StrictMode>,
)
