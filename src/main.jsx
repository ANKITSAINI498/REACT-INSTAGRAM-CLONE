import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ViewStory from './ViewStory.jsx'
import Profile from './Profile.jsx'

const router = createBrowserRouter (
  [
  {
    path:'/',
    element:<App />
  },
  {
    path:'/story/:id',
    element:<ViewStory/>
  },
  {
    path:'/profile',
    element:<Profile/>
  }
]
)

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>

)
