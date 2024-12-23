import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'

import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import NotFound from './components/NotFound'
import JobsLayout from './layout/JobsLayout'
import Jobs, { jobsLoader } from './pages/Jobs'
import JobDetails, { jobDetailsLoader } from './components/JobDetails'
import Error from './components/Error'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='product' element={<Product />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<ContactLayout />}>
            <Route path='info' element={<ContactInfo />} />
            <Route path='form' element={<ContactForm />} />
          </Route>
          <Route path='jobs' element={<JobsLayout />}>
            <Route index element={<Jobs />} loader={jobsLoader} errorElement={<Error/>} />
          </Route>
          <Route path='*' element={<NotFound />} />
          <Route path='/jobs/:id' element={<JobDetails/>} loader={jobDetailsLoader} errorElement ={<Error/>}/>
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
