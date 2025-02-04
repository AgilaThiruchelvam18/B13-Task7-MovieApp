import { useState, useEffect } from 'react';
import axios from 'axios';

function Pagination(props){
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
  
    const fetchMovies = async (page,movieValue) => {
      console.log("page",page)
      console.log("movieValue",movieValue)
      setIsLoading(true);
      try {
        const response = await axios.get(`https://www.omdbapi.com/?s=${movieValue}&apikey=adf6ad4a&page=${page}`);
        props.setMovies(response.data.Search || []);
        setTotalResults(parseInt(response.data.totalResults));
        console.log("response",response)

      } catch (error) {
        console.error('Error fetching movies:', error);
      }
      setIsLoading(false);
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(totalResults / 10)) {
          setCurrentPage((prev) => prev + 1);
        }
      };
    
      const handlePreviousPage = () => {
        if (currentPage > 1) {
          setCurrentPage((prev) => prev - 1);
        }
      };

      useEffect(() => {
        if (!props.isFilterOn) {  
          fetchMovies(currentPage, props.movieValue);
          console.log("current page",currentPage)
          console.log("current page",props.movieValue)
        }
      }, [currentPage, props.movieValue]);

    useEffect(() => {
      // if (props.genreType && props.genreType !== 'All'){
        props.filteredProduct(props.genreType); 

// }
      }, [props.movies,props.genreType]);
  
    return(
        
            <footer className=" text-white">              
        
           
              <div className="flex justify-center items-center gap-4 p-2">
                <button 
                  onClick={handlePreviousPage} 
                  disabled={currentPage === 1} 
                  className={`px-2 py-2 rounded-lg ${
                    currentPage === 1 ? 'bg-gray-600' : 'bg-blue-500 hover:bg-blue-700'
                  }`}
                >
                  Prev</button>
        
                <span className="text-xl font-bold"> {currentPage}</span>
        
                <button 
                  onClick={handleNextPage} 
                  disabled={currentPage >= Math.ceil(totalResults / 10)}
                  className={`px-2 py-2 rounded-lg ${
                    currentPage >= Math.ceil(totalResults / 10) ? 'bg-gray-600' : 'bg-blue-500 hover:bg-blue-700'
                  }`}
                >
                Next</button>
              </div>
            </footer>
          );
        

}
export default Pagination;