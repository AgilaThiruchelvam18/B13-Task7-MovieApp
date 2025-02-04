function FavList(props)
{
    return(
       props.favouriteMovies.length? <div className="w-2/6  text-white border-8 border-gray-800  m-4 overflow-y-scroll">{
            <div className="w-full grid grid-cols-1">{
props.favouriteMovies.map((movie)=>(
    <div className="w-full flex flex-row justify-between p-2">
<div><img className="w-30 h-30 p-2" src={movie.Poster}/></div>
<div className="w-48 flex flex-col font-bold text-md ">
    <div>{movie.Title}</div>
    <div>year-{movie.Year}</div>
    <div>Type-{movie.Type}</div>
</div>
<button onClick={()=>{props.removeFavouriteMovie(movie)}}>💛</button>
    </div>

))
}</div>
        }</div>:<div className="w-2/6 h-screen bg-white overflow-y-auto font-bold text-center p-2">No Favourite Movies Found</div>
    );
}
export default FavList;