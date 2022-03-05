import React from 'react';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import {doc,getDocs,collection} from 'firebase/firestore';
import { FirDb } from '../Firebase';

const Sign_In=()=>{
  const [auth,setAuth]=useState({
    email:'',
    password:''
  })
  let name1,value
  const AllData=collection(FirDb,"users")
  const getData=(e)=>{
        name1=e.target.name;
        value=e.target.value;
        setAuth({...auth, [name1]:value});
        console.log(auth)
  }
  var email1=auth.email
  const FetchData=(e)=>{
   e.preventDefault();
   const sdata={
     email:email1
   }
   const data=doc(FirDb,"users",sdata)
   const data1=getDocs(data);
   console.log(data1)
  }
    return(
        <>
        <form className='form'>
            <h1>Sign In</h1>
  <div class="form-group space">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={auth.email} onChange={getData}/>
   
  </div>
  <div class="form-group space">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={auth.password} onChange={getData}/>
  </div>
 
  <button type="submit" class="btn btn-primary" onClick={FetchData}>Log In</button>
  <h5>Not Register? <Link to='/signup'>Register</Link></h5>
</form>
        </>
    )
}
export default Sign_In;