import React from 'react'
import'./globals.css'
import { Routes,Route } from 'react-router-dom'
import SignInForm from './_auth/forms/SignInForm'

import SignUpForm from './_auth/forms/SignUpForm'
import { HomePage } from './root/pages'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './root/RootLayout'

const App = () => {
  return (
   <main className='flex h-screen'>
    <Routes>
        {/* public routes -like login and signup*/ }

        <Route element={<AuthLayout/>}>
        
          <Route path='/sign-in' element={<SignInForm/>}/>
          <Route path='/sign-up' element={<SignUpForm/>}/>
        </Route>
          


        {/* private routes after login and signup*/}
        <Route element={<RootLayout/>}>
          <Route index element={<HomePage/>}/>
        </Route>


    </Routes>

   
   </main>
  )
}

export default App
