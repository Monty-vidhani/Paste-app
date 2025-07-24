import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router"
import NavBar from './components/NavBar'
import Home from './components/home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import {NavLink} from 'react-router-dom' ;

const router = createBrowserRouter(
  [
    {
      path:"/",
    element:
    <div>
      <NavBar/>
      <Home/>
    </div>,
    },
     {
      path:"/pastes",
    element:
    <div>
      <NavBar/>
      <Paste/>
    </div>,
    },
     {
      path:"/pastes/:id",
    element:
    <div>
      <NavBar/>
      <ViewPaste/>
    </div>,
    },
  ]
)

function App() {
  

  return (
<div>
  <RouterProvider  router={router}/>

  
</div>
  )
}

export default App
