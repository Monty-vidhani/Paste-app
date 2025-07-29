import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router"
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import Paste from './components/Paste.jsx'
import ViewPaste from './components/ViewPaste.jsx'
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
