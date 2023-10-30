import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Components//Main'


function Navigation() {
  return (
    <div>

<Routes>
    
    <Route  path='/' element={<Main/>}/>
    </Routes>      
    </div>
  )
}

export default Navigation
