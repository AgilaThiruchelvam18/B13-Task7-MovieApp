import searchIcon from './images/search.png';
import { useState, useEffect } from 'react'
import { Link } from 'react-router';
import FavList from "./FavList.jsx";
function FavSearchcard(props) {
  const [movieValue, setMovieValue] = useState('');
  const moviesToDisplay = props.isFilterOn ? props.finalFilterResults : props.movies;

  return (
   
      props.isLoading ? 
        <div className="flex justify-center items-center h-full text-white text-2xl">
          Loading...
        </div>
      :<div className='w-full flex flex-row  overflow-y-auto'>
        <div className='w-4/6 flex flex-col'>
        <div className='flex flex-row justify-between  p-4 '>
          <div></div>
          <div className='flex flex-row  '>
            <div className='my-auto'><input type="text" value={movieValue} onChange={(e) => { setMovieValue(e.target.value) }} className='w-sm rounded-md showdow-lg bg-white  p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Search Movies' />
            </div>
            <button onClick={() => { props.fetchProducts(movieValue); }}> <img src={searchIcon} /></button>
          </div>
          <div className='my-auto '>
          <select
          value={props.genreType} 
          onChange={(e) => { props.setGenreType(e.target.value); }} 
          className='w-44 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg'
        >
          <option value="All">All</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Animation">Animation</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Crime">Crime</option>
          <option value="Comedy">Comedy</option>
        </select>
          </div>
        </div>
        <div>

        <div className='w-full h-screen overflow-y-auto'>{
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
}</div>

        </div>
      </div>
      <FavList favouriteMovies={props.favouriteMovies} removeFavouriteMovie={props.removeFavouriteMovie}  ></FavList>
    </div>
  
  );
}
export default FavSearchcard;