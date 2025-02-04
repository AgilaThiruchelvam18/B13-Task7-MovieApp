import { useState, useEffect } from 'react'
import axios from 'axios';
import Card from './Card.jsx';
import Navbar from './Navbar.jsx';
import Searchbar from './Searchbar.jsx';
import MovieDetails from './MovieDetails.jsx';
import Pagination from './pagination.jsx';
import FavSearchcard from './FavSearchcard.jsx';
import FavList from './FavList.jsx';



import { BrowserRouter, Routes, Route, Link } from 'react-router';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState('');
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [movieValue, setMovieValue] = useState('');
  const [favOnClick, setFavOnClick] = useState(false);
  const [genreType, setGenreType] = useState('All');
  const [finalFilterResults, setFinalFilterResults] = useState([]);
  const [isFilterOn, setisFilterOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFilterLoading, setIsFilterLoading ] = useState(false);



  const [message, setMessage] = useState('');

  let fetchProducts = async (movieValue) => {
    try {
      setMovies([]);
      setisFilterOn(false);
      setIsLoading(false);
      setGenreType('All')
      const response = await axios.get(`http://www.omdbapi.com/?s=${movieValue}&apikey=adf6ad4a`);

      if (response.status === 200) {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        alert("No movies found. Try searching for another title.");
      }
    } catch (error) {
      if (error.response) {
        console.log('Server responded:', error.response.data);
      } else if (error.request) {
        console.log('No response received:', error.request);
      } else {
        console.log('Error setting up request:', error.message);
      }    }
    finally {
      setIsLoading(false);
    }
  };
  let fetchSelectedProduct = async (movieValue) => {
    try {
      let response = await axios.get(`http://www.omdbapi.com/?i=${movieValue}&apikey=adf6ad4a`);
      if (response.status === 200) {
        setSelectedMovie(response.data);
      } else {
        setSelectedMovie([]);
        alert("No movies found. Try searching for another title.");
      }
    }
    catch (error) {
      console.error("Error fetching movies:"
        , error);
      alert("Something went wrong while fetching movies. Please try again later.");
    }
    

  }
  let filteredProduct = async (genreType) => {
    try {
      setMessage("");
      setisFilterOn(true);
      setFinalFilterResults([]);
      setIsFilterLoading(true); // Start loading when filter begins
  
      if (genreType === 'All') {
        setFinalFilterResults(movies);
        setIsFilterLoading(false); // Stop loading
        return;
      }
  
      const requests = movies.map((movie) =>
        axios.get(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=adf6ad4a`)
      );
  
      const responses = await Promise.all(requests);
  
      let filteredMovies = [];
      for (let i = 0; i < responses.length; i++) {
        const data = responses[i].data;
        if (data.Genre && data.Genre.includes(genreType)) {
          filteredMovies.push(data);
        }
      }
      if (filteredMovies.length === 0) {
        setMessage("No Movies Found for this Genre.");
      } else {
        setMessage(""); // Clear message if movies are found
      }
  
      setFinalFilterResults(filteredMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
      alert("Something went wrong while fetching movies. Please try again later.");
    } finally {
      setIsFilterLoading(false); // Ensure loading stops even if an error occurs
    }
  };
  
  
  
  let clickOnfavouriteMovies = async (movie) => {
    let favouriteMovie = favouriteMovies.some((favmovie) => favmovie.imdbID === movie.imdbID)

    if (!favouriteMovie) {
      setFavouriteMovies([...favouriteMovies, movie]);
    }

  }
  let FavOnClickStatus = () => {
    if (!favOnClick) {
      setFavOnClick(true);
    }
    else {
      setFavOnClick(false);

    }
  }
  let removeFavouriteMovie = (movie) => {
    const updatedFavouriteMovies = favouriteMovies.filter(
      (favmovie) => favmovie.imdbID !== movie.imdbID
    );
    setFavouriteMovies(updatedFavouriteMovies);
    if (favouriteMovies.length == 0) {
      setFavOnClick(true);
    }
  }
  useEffect(() => {
    // if(finalFilterResults.length==0&&movies.length>0)
    // {
    //   setMessage("Movies Not Found")
    // }
    // else{
    //   setMessage("");
    // }
    console.log("Updated Filter Results:", finalFilterResults);
  }, [finalFilterResults]);
  useEffect(() => {
    filteredProduct(genreType);
  }, [genreType]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={favOnClick ? <div className='w-full h-screen flex flex-col  bg-black'>
            <Navbar favOnClick={favOnClick} FavOnClickStatus={FavOnClickStatus}></Navbar>
            <FavSearchcard isFilterLoading={isFilterLoading} message={message}  isFilterOn={isFilterOn} finalFilterResults={finalFilterResults} setMovieValue={setMovieValue} genreType={genreType} setGenreType={setGenreType} removeFavouriteMovie={removeFavouriteMovie} clickOnfavouriteMovies={clickOnfavouriteMovies} movies={movies} fetchProducts={fetchProducts} movieValue={movieValue} favouriteMovies={favouriteMovies} favOnClick={favOnClick} ></FavSearchcard>
            <Pagination message={message} setGenreType={setGenreType} filteredProduct={filteredProduct} genreType={genreType} movieValue={movieValue} movies={movies} setMovies={setMovies}></Pagination>
          </div> : <div className='w-full h-screen flex flex-col  bg-black'>
            <Navbar favOnClick={favOnClick} FavOnClickStatus={FavOnClickStatus}  ></Navbar>
            <Searchbar setMovieValue={setMovieValue} genreType={genreType} setGenreType={setGenreType} fetchProducts={fetchProducts} movieValue={movieValue} ></Searchbar>
            <Card isFilterLoading={isFilterLoading} message={message}  isLoading={isLoading} isFilterOn={isFilterOn} finalFilterResults={finalFilterResults}  removeFavouriteMovie={removeFavouriteMovie} clickOnfavouriteMovies={clickOnfavouriteMovies} movies={movies} favouriteMovies={favouriteMovies}></Card>
          <Pagination setGenreType={setGenreType}  filteredProduct={filteredProduct} genreType={genreType}  movieValue={movieValue} movies={movies} setMovies={setMovies}></Pagination>
          </div>}>
        </Route>
        <Route
          path="/movie/:id"
          element={<div className='w-full h-screen flex flex-col  bg-black'>
            <Navbar></Navbar>
            <MovieDetails selectedMovie={selectedMovie} fetchSelectedProduct={fetchSelectedProduct} movies={movies}></MovieDetails>
          </div>}>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App
