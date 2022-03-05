import React from 'react';


const MovieDetails=(element)=>{

    return(
        <>
        <div class="container">
 <div class="imgdiv"><img src="${IMG_URL + element.poster_path}" class="poster"/></div>
 <div class="detaildiv"> 
 <table>
 <tr>
 <td><h4>Title : </h4></td> </tr>
 <tr><td><h6>${element.title}</h6></td></tr>
 <tr>
 <td><h4>Release Date : </h4></td> </tr>
 <tr><td><h6>${element.release_date}</h6></td></tr>
 <tr>
 <td><h4>Rating : </h4></td> </tr>
 <tr><td><h6>{element.vote_average}</h6></td></tr>
 <tr><td><h4>Total Vote : </h4></td> </tr>
 <tr><td><h6>{element.vote_count}</h6></td></tr>
 <tr><td><h4>Overview : </h4></td> </tr>
 <tr><td><h6>${element.overview}</h6></td></tr>
 
 </table>
 
 </div>
 </div>

        </>
    )
}
export default MovieDetails;