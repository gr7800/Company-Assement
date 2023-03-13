import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Library from '../Components/Library'
import NewBlog from '../Components/NewBlog'

const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Library />}/>
      <Route path='/newblog' element={<NewBlog/>} />
    </Routes>
  )
}

export default Mainroutes