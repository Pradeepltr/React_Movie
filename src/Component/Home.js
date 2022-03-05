import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import MovieDetails  from './MovieDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
const Home=()=>{
    const[mdata,SetData]=useState([]);
    
    const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const SearchUrl = BASE_URL + '/search/movie?' + API_KEY;
useEffect(()=>{
  fetch(API_URL ).then((res)=>{
      
      return res.json();
  }).then((data)=>{
      console.log(data.results)
    getData(data.results);
  })
},[])
console.log(mdata)
function getData(data){
    console.log(data);
    SetData(data);
}
const APIFetch=(data)=>{
    fetch(data).then((res)=>{
        return res.json();
    }).then((res_data)=>{
        getData(res_data.results);
    })
}
const Input=(e)=>{
    console.log(e.target.value);
   var searchValue=e.target.value;

   APIFetch(SearchUrl + '&query=' + searchValue);
}
const SearchClick=(e)=>{
    var searchValue=e.target.value;

   APIFetch(SearchUrl + '&query=' + searchValue);

}
return(
    <>
   
    <form className="d-flex">
    <h1>Search Movies</h1>
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onInput={Input}/>
    <button className="btn btn-outline-success" type="submit" onClick={Input}>Search</button>
  </form>
    <div className='flex'>
  
  {mdata.map((element)=>{
      return(
       
          
      <div className='Movie'>
          <div className="card" Style="width: 10rem;">
       <Link to="/detail"><img src={IMG_URL + element.poster_path} className="card-img-top" alt="..."/></Link>
  <div className="card-body">
    <h5 className="card-title">{element.title}</h5>
   
    
    
   
  </div>
</div>
      </div>
      
      )
  })}
  </div>
  </>
)
  
}
export default Home;