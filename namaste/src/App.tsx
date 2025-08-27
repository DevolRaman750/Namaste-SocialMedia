import React from 'react'
import'./globals.css'
import { Routes,Route } from 'react-router-dom'
import SignInForm from './_auth/forms/SignInForm'
import HomePage from './root/pages/HomePage'
import SignUpForm from './_auth/forms/SignUpForm'

const App = () => {
  return (
   <main className='flex h-screen'>
    <Routes>
        {/* public routes -like login and signup*/ }
          <Route path='/sign-in' element={<SignInForm/>}/>
          <Route path='/sign-up' element={<SignUpForm/>}/>
          


        {/* private routes after login and signup*/}
        <Route index element={<HomePage/>}/>


    </Routes>

   
   </main>
  )
}

export default App
