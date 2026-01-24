import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector( store => store.app.isMenuOpen)
    const location = useLocation();
  const isWatchPage = location.pathname.includes("watch");

    if(!isMenuOpen) return null;

    return (
    <div className={`p-5 shadow-lg w-50 bg-white h-full ${
      isWatchPage 
        ? "fixed top-16 left-0 z-50 h-[calc(100vh-64px)]"
        : "relative" 
    }`}>
     <h1 className="font-bold  mb-2"><Link to="/"> Home</Link></h1>
      <h1 className="font-bold">Shorts</h1><br />
      <h1 className="font-bold  mb-4">Subscriptions</h1>
      <ul className="space-y-1 mb-4">
      <li>Tech Channel</li>
      <li>Music Channel</li>
      <li>Movie Channel</li>
      <li>Sports Channel</li>
      <li>News Channel</li> 
      <li>Gaming Channel</li> 
      </ul><br />

      <h1 className='font-bold mb-2'>You</h1>
      <ul className="space-y-1 mb-4">
      <li>History</li>
      <li>Playlist</li>
      <li>Watch Later</li>
      <li>Liked Videos</li> 
      <li>Your Videos</li> 
      <li>Downloads</li> 
      </ul><br />
      <h1 className='font-bold mb-2'>Explore</h1>
      <ul className="space-y-1 mb-4">
      <li>Shopping</li>
      <li>Music</li>
      <li>Flim</li>
      <li>Live</li>
      <li>Gaming</li> 
      <li>courses</li> 
      <li>Sport</li> 
      </ul><br />
      <h1 className='font-bold mb-2'>More from YouTube</h1>
      <ul className="space-y-1 mb-4">
      <li>YouTube Premium</li>
      <li>YouTube Studio</li>
      <li>YouTube Music</li>
      <li>YouTube Kids</li>
      </ul><br />
    <h1 className="font-bold">Setting</h1>
    <h1 className="font-bold">Report History</h1>
    <h1 className="font-bold">Help</h1>
    <h1 className="font-bold">Send feedback</h1>
    </div>
  )
}

export default Sidebar
