import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Home } from './pages/Home/Home'
import { Product } from './pages/Product/Product'
import { Products } from './pages/Products/Products'
import './App.scss'


const Layout = () => {
  return(<>
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  </>)
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: 'https://ranasinghe98.github.io/REACT_E_COMMERCE/',
        element: <Home/>
      },
      {
        path: 'https://ranasinghe98.github.io/REACT_E_COMMERCE//products/:id',
        element: <Products/>
      },
      {
        path: 'https://ranasinghe98.github.io/REACT_E_COMMERCE//product/:id',
        element: <Product/>
      },
    ]
  }
])

const App = () => {
  return(<>
      <RouterProvider router={router} />
    </>)
}

export default App;
