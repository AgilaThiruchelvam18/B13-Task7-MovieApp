import searchIcon from './images/search.png';
import { useState, useEffect } from 'react'


function Searchbar(props){
    // const [movieValue, setMovieValue] = useState('');
    // const [genreType, setGenreType] = useState('All');


    return( 
        <section className='w-full flex flex-col md:flex-row justify-between  p-4 '>
                <div></div>
                <div className='flex flex-row  '>
                  <div className='my-auto'>
                    <input type="text"
                     value={props.movieValue}
                      onChange={(e)=>{props.setMovieValue(e.target.value)}} 
                      className='w-48 md:w-lg rounded-md showdow-lg bg-white  p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                       placeholder='Search Movies' />
                  </div>
                  <button onClick={()=>{props.fetchProducts(props.movieValue);}}> <img src={searchIcon} /></button>
                </div>
                <div className='my-auto '>
                <select
          value={props.genreType} 
          onChange={(e) => { props.setGenreType(e.target.value); }} 
          className='w-44 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg'
        >
          <option value="All" >All</option>
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
              </section>
    );
}
export default Searchbar;