import React, { lazy } from 'react'
import Header from './compenents/Header'
import Footer from './compenents/Footer';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));


const App = () => {

  

  return (
    <div className='bg-color_1'>
       <div className='w-full'>
            <Header />
       </div>

        <main> 
           <HomePage />
        </main>

        <Footer />
    </div>
  )
}

export default App
