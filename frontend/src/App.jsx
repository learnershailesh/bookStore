import React from 'react'

import Home from './components/home/Home'
import {Navigate, Route, Routes} from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'
import Login from './components/Login'
import {Toaster} from "react-hot-toast";
import { useAuth } from './context/AuthProvider'
function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <div className=''>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={authUser?<Courses/>: <Navigate to="/Signup"/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Toaster />
      </div>
        
    </>
  )
}

export default App
