import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Account from './components/Account'
import Login from './components/Login'
import Signup from './components/Signup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/account' element={<Account />}/>
      </Routes>
    </div>
  )
}

export default App
