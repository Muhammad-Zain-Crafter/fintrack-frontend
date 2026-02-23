import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar/>
          <Home />
        </div>
      )
    },
     {
      path: "/features",
      element: (
        <div>
          <Navbar/>
          <Features/>
        </div>
      )
     },
     {
      path: "/login",
      element: (
        <div>
          <Login/>
        </div>
      )
     },
     {
      path: "/register",
      element: (
        <div>
          <Register/>
        </div>
      )
     }
  ])
  return (
      <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  
  )
}

export default App
