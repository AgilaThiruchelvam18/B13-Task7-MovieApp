import { useParams,Link } from 'react-router'
import { useState, useEffect } from 'react'
function MovieDetails(props){
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
//     let selectedProduct=props.movies.find((movie)=>movie.imdbID===id)
//     console.log(id);
// console.log("selectedProduct value======>",props.selectedMovie.Ratings[0].Value);
useEffect(() => {
    setIsLoading(true);
    props.fetchSelectedProduct(id).finally(() => setIsLoading(false));; 
  }, [id]);
return (
    <section className='w-full  flex justify-center items-center'>
            {isLoading ? (
                <div className="text-white text-2xl">Loading...</div>
            ) : 
    props.selectedMovie? 
    <div className="fixed inset-0 py-8 sm:m-2 flex flex-wrap justify-center items-center  h-screen z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-hidden font-[sans-serif]">
    <div className='w-full md:w-2/3 bg-gray-800 flex justify-center items-center  relative p-8 sm:p-16'>{
       <div className='w-full flex flex-col  md:flex-row justify-center items-center '>
        <div className='w-3/6  '><img src={ props.selectedMovie.Poster}   className='object-cover w-5/6 h-fit  ' 
        /> </div>
        <div className="w-3/6 flex flex-col justify-center items-center align-center text-center text-white ">
           <div className='w-full flex flex-row justify-between sm:justify-center'>
             <div className=""></div>
           <div>  <Link to="/" className='text-white text-2xl p-4'>X</Link></div>
             </div>
        <div className=' flex flex-col justify-center items-center text-lg font-bold  '>
            <div className='mx-auto '>
             <div className='text-3xl font-bold p-4'>{ props.selectedMovie.Title} </div>
             <div className='flex flex-row justify-between text-amber-200'>
             <div className="text-2xl font-medium p-4"><span className="text-2xl font-medium"></span>{ props.selectedMovie.Year}</div>
             <div className="text-2xl font-medium p-4"><span className="text-2xl font-medium"></span>{ props.selectedMovie.Ratings[0].Value}</div>
             <div className="text-2xl font-medium p-4"><span className="sm:hidden text-2xl font-medium"></span>{ props.selectedMovie.Runtime}</div>
             <div className="text-2xl font-medium p-4"><span className="text-2xl font-medium"></span>{ props.selectedMovie.Genre}</div>

             </div>
            <div className="text-lg font-medium p-4"><span className="text-2xl font-medium"></span>{ props.selectedMovie.Plot}</div>
            <div className="text-2xl font-medium p-4  text-amber-200"><span className="text-2xl font-medium">Cast-</span>{ props.selectedMovie.Actors}</div>
           <div className=''><div className='max-w-64 bg-white text-black rounded-lg p-2 mx-auto'>Watch Now</div></div>
            </div>
        </div>
       </div>
       
            </div>
    }</div></div>:<div className='w-full h-screen flex justify-center items-center'>
        <div className="w-2/6 flex flex-row justify-between items-center bg-white font-bold border border-fuchsia-600 p-4">
       <div> Movie Not Found</div> <div><Link to="/" className='text-black underline p-4'>Back</Link></div></div>
</div>
}</section>
);
}
export default MovieDetails;