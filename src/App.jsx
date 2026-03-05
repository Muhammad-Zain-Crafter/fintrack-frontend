import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Income from './pages/income/Income';
import Expenses from './pages/expenses/Expenses';
import DashboardHome from './pages/dashboard/DashboardHome ';
import Transaction from './pages/dashboard/Transaction';
import Budgets from './pages/budgets/Budgets';
import Footer from './components/Footer';
import EditProfile from './pages/profile/EditProfile';
import ChangePassword from './pages/profile/ChangePassword';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar/>
          <Home />
          <Footer />
        </div>
      )
    },
     {
      path: "/features",
      element: (
        <div>
          <Navbar/>
          <Features/>
          <Footer />
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
    element: <Dashboard />,
    children: [
      { index: true, element: <DashboardHome /> }, // default
      { path: "income", element: <Income /> },
      { path: "expenses", element: <Expenses /> },
      { path: "transactions", element: <Transaction /> },
      { path: "budgets", element: <Budgets />},
      { path: "edit-profile", element: <EditProfile /> },
      { path: "change-password", element: <ChangePassword />}
    ],
  },
  ])
  return (
      <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  
  )
}

export default App
