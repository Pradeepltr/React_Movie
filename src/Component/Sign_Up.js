import React from 'react'
import "./Sign_Up.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {FirDb} from '../Firebase';
import { collection,addDoc } from 'firebase/firestore';

const Sign_Up=()=>{
    const [user,setUser]=useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        choice:''
    })
    let name1,value;
    const GetData=(e)=>{
        name1=e.target.name;
        value=e.target.value;
        setUser({...user, [name1]:value});
        console.log(user)
    };
    const postData=async (e)=>{
      const fname=user;
      console.log("hhhhhhhhhhhhh")
      try{
        const data=collection(FirDb,"Users")
        addDoc(data,user);
        alert("Data Submitted successful")
        setUser({
          fname:'',
          lname:'',
          email:'',
          password:'',
          choice:''
        })
      }catch{
        alert("Data not submitted");
      }
    
    }
    return(
        <>
          <form className='form'>
              <h1>Register</h1>
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="First name" name='fname' value={user.fname} onChange={GetData}/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Last name" name='lname' value={user.lname} onChange={GetData}/>
    </div>
  </div>
  <div className="row">
    <div className="col">
      <input type="email" className="form-control" placeholder="email" name='email' value={user.email} onChange={GetData}/>
    </div>
    <div className="col">
      <input type="password" className="form-control" placeholder="Password" name='password' value={user.password} onChange={GetData}/>
    </div>
  </div>
  <div className="row">
    <div className="col1">
      <input type="text" className="form-control" placeholder="Favorite Actor Director or movieName" name='choice' value={user.choice} onChange={GetData}/>
    </div>
    
  </div>
  <button type='button' className='btn btn-primary' onClick={postData}>Submit</button>
  <h5>Already Register please? <Link to='/signin'>Sign_in</Link></h5>
</form>
        </>
    )
}
export default Sign_Up;