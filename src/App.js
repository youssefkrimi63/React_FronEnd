import React from 'react';

// import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import AdminDashboard from './Component/AdminDashboard/AdminDashboard';
import CreateStudent from "./Component/CreateStudent/CreateStudent"
import CreateCourse from "./Component/createCourse/createCourse"
import AddCourse from "./Component/AddCourse/AddCourse"
import Edit from "./Component/AdminDashboard/Edit"
import Cours from "./Component/userDashboard/cours"
import UserDashboard from "./Component/userDashboard/userDashboard"



function App() {
  return (
    
    
 
     
     <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Login/>} />

          <Route path='/user Dashboard' element={<UserDashboard/>}/>
          <Route path='/Cours' element={< Cours/>}/>
          <Route path='/dashboard' element={<AdminDashboard/>}/>
          <Route path='/CreateStudent' element={< CreateStudent/>}/>
          <Route path='/CreateCourse' element={< CreateCourse/>}/>
          <Route path='/AddCourse' element={< AddCourse/>}/>
          <Route path='/Edit' element={< Edit/>}/>
         

          
          
          
          
          
        </Routes>
      </BrowserRouter>
    </>

    
      

    
  );
}

export default App;





