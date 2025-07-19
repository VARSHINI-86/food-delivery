import React from 'react'
import SideBar from './Components/SideBar/SideBar'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Orders/Order'
import { ToastContainer } from 'react-toastify';
import Menu from './pages/Menu/Menu'
// import 'react-toastify/dist/ReactToastify.css';

const App = () => {

   const url = "http://localhost:4000" 

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/menu" element={<Menu url={url}/>} />
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/list" element={<List url={url}/>} />
          <Route path="/orders" element={<Order url={url}/>} />
        </Routes> 
      </div>
    </div>
  )
}

export default App
