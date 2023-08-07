import React, { lazy } from 'react'
import Header from './compenents/Header'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));


const App = () => {


  return (
    <div className='bg-color_1'>
       <div className='content'>
            <Header />
       </div>

        <main className='content'>
           <HomePage />
        </main>
    </div>
  )
}

export default App
