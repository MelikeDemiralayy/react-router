import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'

import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='product' element={<Product />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<ContactLayout />}>
            <Route path='info' element={<ContactInfo/>} />
            <Route path='form' element={<ContactForm />} />
          </Route>
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
