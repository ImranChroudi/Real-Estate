import React, { lazy } from 'react'
import Header from './compenents/Header'
import Footer from './compenents/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import ListiningsPage from './pages/ListiningsPAge/ListiningsPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));


const App = () => {

  

  return (
    <div className='bg-color_1'>
       <div className='w-full'>
            <Header />
       </div>

        <main> 
            <Routes>
                <Route path='/' element={
                    <React.Suspense fallback={<div>Loading Listinings...</div>}>
                         <HomePage />
                   </React.Suspense>
                } />  

                <Route path="/Listinings" element={
                    <React.Suspense fallback={<div>Loading Listinings...</div>}>
                         <ListiningsPage />
                   </React.Suspense>
                } />             
            </Routes>
        </main>

        <Footer />
    </div>
  )
}

export default App
