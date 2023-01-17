import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error404 from './pages/Error404'
import Home from './pages/Home'
import DefaultLayout from './layouts/default'
import About from './pages/About'

const router = createBrowserRouter([{ 
    path : '/', 
    element : <DefaultLayout/>,
    children: [
      {
        path : '',
        element : <Home/>
      },
      {
        path : 'about',
        element : <About/> 
      }
    ],
    errorElement: <Error404/>
 }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
