import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error404 from './pages/Error404'
import DefaultLayout from './layouts/default'
import Home, {loader as homeLoader} from './pages/Home'
import FicheLogement, {loader as logementLoader} from './pages/Fiche_logement'
import About, {loader as aboutloader} from './pages/About'

const router = createBrowserRouter([{ 
    path : '/', 
    element : <DefaultLayout/>,
    children: [
      {
        path : '',
        element : <Home/>,
        loader : homeLoader
      },
      {
        path : 'a-propos',
        element : <About/>,
        loader :  aboutloader
      },
      {
        path : ':id',
        element : <FicheLogement/>,
        loader : logementLoader
      }
    ],
    errorElement: <Error404/>
 }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
