import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage';
import Login from './pages/Auth/Login';

import Dashboard from './pages/home/Dashboard';
import Interview from './pages/InterviewPrep/Interview';



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<Login/>}/>
          
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/interview-prep/:sessionId' element={<Interview/>}/>
        </Routes>
      </Router>


      <Toaster position="top-center" reverseOrder={false} />  
    </div>
  )
}

export default App
