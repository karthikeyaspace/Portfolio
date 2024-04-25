import React, {lazy, Suspense} from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

//files 
import Root from './components/Root'
import Home from './components/Home'
import About from './components/About/About'
import NotFound from './components/NotFound'
import Projects from './components/Projects/Projects'
import Blogs from './components/Blogs'
import Resume from './components/Resume'
import VisibilityIcon from './components/VisibilityIcon.js'


function App() {

  let BrowserRouter = createBrowserRouter([{
    path: '',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'blogs',
        element: <Blogs />
      },
      {
        path: 'resume',
        element: <Resume />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }])


  return (
    <>
      <VisibilityIcon />
      <RouterProvider router={BrowserRouter} />
    </>
  )
}

export default App
