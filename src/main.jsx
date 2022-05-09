import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Login from './components/Login'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {localStorage.getItem('user') ? 
      <App />
      :
      <Login/>
    }
      
    </BrowserRouter>
    
  </React.StrictMode>
)
