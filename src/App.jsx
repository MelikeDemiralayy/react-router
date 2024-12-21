import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='product' element={<Product />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </>
    )
  );
  return (
    <div>
      {/* <Navbar/>
      <div className='container'>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/product' element={<Product/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div> */}

      <RouterProvider router={router} />
    
    </div>
  )
}

export default App
