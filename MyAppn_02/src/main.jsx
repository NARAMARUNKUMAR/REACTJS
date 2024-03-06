import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Login from './Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Login />
    <Login />
  </React.StrictMode>,
)
