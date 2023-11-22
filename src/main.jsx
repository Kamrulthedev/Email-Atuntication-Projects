import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import RootRouter from './Compunents/Root/Root.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={RootRouter}></RouterProvider>
  </React.StrictMode>,
)
