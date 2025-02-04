import userIcon from './images/usericon.png';
function Navbar(props)
{
    return(
        <header className='flex flex-row justify-between font-bold p-2  bg-gray-800'>
        <h1 className='text-white text-2xl my-auto'>Flix</h1>
        <nav className='w-28 justify-between flex flex-row'> 
          <div className='text-5xl text-white'>
            <button onClick={()=>{props.FavOnClickStatus();}}>
              {props.favOnClick?<span>💛</span>:<span>♥</span>}
              </button>
</div>
          <div><img src={userIcon} alt="user" /></div>
          </nav>
    </header>
    );
}
export default Navbar;