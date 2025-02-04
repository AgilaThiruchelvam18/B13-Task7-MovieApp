
import {Link } from 'react-router';
import { useState, useEffect } from 'react'

function Card(props){
  
  const moviesToDisplay = props.isFilterOn ? props.finalFilterResults : props.movies;
  
   
  
return(
  <section className='w-full h-screen overflow-y-auto'>{
    props.isLoading || props.isFilterLoading ? (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-transparent border-blue-500"></div>
      </div>
    )
   : moviesToDisplay.length > 0 ?(<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-8 font-bold'>
  {
    moviesToDisplay.map((movie, index) => (
      
      <div key={index} className=' text-white flex flex-col justify-between rounded-lg shadow-lg  bg-gray-800 p-2 '>
          {/* <button onClick={()=>{movieOnClick(movie);}}> */}
          <Link to={`/movie/${movie.imdbID}`}>
        <div><img src={movie.Poster} alt={movie.Title} className='h-96 mx-auto'></img></div>
        <div className='h-16 text-center my-auto  p-2 '>{movie.Title}</div>      
        </Link>
        <div className='flex flex-row justify-between p-2'>
        <div>{movie.Year}</div>
        <div className='text-2xl'>
           <button onClick={() => props.clickOnfavouriteMovies(movie)}>
            {props.favouriteMovies.some((favmovie)=>(favmovie.imdbID===movie.imdbID))?<span onClick={()=>props.removeFavouriteMovie(movie)}>💛</span>:<span>♥</span>}
           </button></div>
        </div>
        {/* </button> */}
      </div>
  
    ))
  
  }
  </div>):
  ( <div className="flex justify-center items-center h-full text-white text-2xl">
    {props.message}
  </div>)
}</section>
 
)
}
export default Card;
