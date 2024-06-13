import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PostForm from './PostForm.jsx'
import Post from './Post.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[

      {
        path:'/',
        element:<Post />

      },
      {
        path:'/create-post',
        element:<PostForm />
      }

    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
