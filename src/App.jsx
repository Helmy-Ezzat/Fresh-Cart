import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Brands from './Components/Brands/Brands'
import Cart from './Components/Cart/Cart'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Categories from './Components/Categories/Categories'
import Notfound from './Components/Notfound/Notfound'
import UserContextProvider from './Context/UserContext'
import ProdectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import { QueryClient, QueryClientProvider } from 'react-query'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import CartContextProvider from './Context/CartContext'
import { Toaster } from 'react-hot-toast'
import Payment from './Components/Payment/Payment'
import AllOrders from './Components/AllOrders/AllOrders'
import WishList from './Components/WishList/WishList'
import { Offline, Online } from 'react-detect-offline'
import WishListContextProvider from './Context/WishListContext'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css'

let routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProdectedRoute>
            <Home />
          </ProdectedRoute>
        ),
      },
      { path: 'login', element: <Login /> },
      {
        path: 'products',
        element: (
          <ProdectedRoute>
            <Products />
          </ProdectedRoute>
        ),
      },
      {
        path: 'brands',
        element: (
          <ProdectedRoute>
            <Brands />
          </ProdectedRoute>
        ),
      },
      {
        path: 'cart',
        element: (
          <ProdectedRoute>
            <Cart />
          </ProdectedRoute>
        ),
      },
      {
        path: 'categories',
        element: (
          <ProdectedRoute>
            <Categories />
          </ProdectedRoute>
        ),
      },
      {
        path: 'productdetails/:id',
        element: (
          <ProdectedRoute>
            <ProductDetails />
          </ProdectedRoute>
        ),
      },
      {
        path: 'payment',
        element: (
          <ProdectedRoute>
            <Payment />
          </ProdectedRoute>
        ),
      },
      {
        path: 'allorders',
        element: (
          <ProdectedRoute>
            <AllOrders />
          </ProdectedRoute>
        ),
      },
      {
        path: 'wishlist',
        element: (
          <ProdectedRoute>
            <WishList />
          </ProdectedRoute>
        ),
      },
      { path: 'register', element: <Register /> },
      { path: '*', element: <Notfound /> },
    ],
  },
])

export default function App() {
  const myClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={myClient}>
        <UserContextProvider>
          <CartContextProvider>
            <WishListContextProvider>
              <RouterProvider router={routers}></RouterProvider>
            </WishListContextProvider>
          </CartContextProvider>
        </UserContextProvider>
        {/* <ReactQueryDevtools initialIsOpen="false" position="bottom-right" /> */}
      </QueryClientProvider>
      <Toaster />
      <Offline>
        <div className="bg-dark fixed-top text-center text-white">
          Your Internet Connection has been corrupted
        </div>
      </Offline>
    </>
  )
}
