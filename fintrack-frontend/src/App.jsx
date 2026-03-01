import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Income from './pages/income/Income';
import Expense from './pages/expenses/Expenses';
import Expenses from './pages/expenses/Expenses';

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
     },
      {
      path: "/dashboard",
      element: (
        <div>
          <Dashboard/>
        </div>
      )
     },
     {
      path: "/income",
      element: (
        <div>
          <Dashboard>
          <Income/>
          </Dashboard>
        </div>
      )
     },
      {
      path: "/expenses",
      element: (
        <div>
          <Dashboard>
          <Expenses/>
          </Dashboard>
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
