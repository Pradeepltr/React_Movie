import React from 'react';
import Nav from './Component/Nav';
import Home from './Component/Home'
import Sign_Up from './Component/Sign_Up'
import Sign_In from './Component/Sign_In'
import MovieDetails from './Component/MovieDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";

const App=()=>{
 return(
  <Router>
   <>
    <Nav />
   <Home />
  
    
     
    
     <Routes>
       {/* <Route path='/status' element={<Status/>}/> */}
       <Route path='/' element={<Home />} />
       <Route path='/signup' element={<Sign_Up/>}/>
       <Route path='/signin' element={<Sign_In/>}/>
       <Route path='/detail' element={< MovieDetails/>}/>

     </Routes>
     
   
  
   </>
   </Router>
 )
}
export default App;