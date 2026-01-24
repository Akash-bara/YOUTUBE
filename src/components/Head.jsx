import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_LOGO, YOUTUBE_MENU, YOUTUBE_SEARCH_API, YOUTUBE_USER } from "../utils/constant";
import { useEffect, useState } from "react";
import { cacheStorage } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
    const [SearchQuery,setSearchQuery] = useState("");
    const [suggestions,setSuggestions] = useState([]);
    const [showSuggestions,setShowSuggestions] = useState(false);
    const searchCache=useSelector((store)=>store.search)
    useEffect(()=>{
        
        const timer = setTimeout(()=> {
            if(searchCache[SearchQuery]){
                setSuggestions(searchCache[SearchQuery]);
            }
            else{
                getSuggestions();
            }
           

        },200);

        return () => {
            clearTimeout(timer);
        }
    },[SearchQuery])

    const getSuggestions = async ()=>{
        const data = await fetch(YOUTUBE_SEARCH_API+  SearchQuery);
        const json =await data.json();
        setSuggestions(json[1]);
        dispatch(cacheStorage({
            [SearchQuery]:json[1],
        }))
    }
     const dispatch = useDispatch();
      const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
      }
  return (
    <div className="grid grid-flow-col grid-cols-3  px-8 py-4 mb-3 shadow-md">
        <div className="flex  col-span-1 items-center gap-4" >
            <img
                onClick={()=>toggleMenuHandler()}
                className="h-7 cursor-pointer"
                src={YOUTUBE_MENU} alt="menu"/>
            <Link to="/">        <img  
                        className="h-6 w-auto cursor-pointer"
                        src={YOUTUBE_LOGO} alt="logo"/>
            </Link>
        </div>
        <div className=" col-span-10 ">
            <div className="flex">
                <input
                value={SearchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                onFocus={()=>setShowSuggestions(true)}
                onBlur={()=>setShowSuggestions(false)}
                className="w-1/2  px-5  text-base border border-gray-300 rounded-l-full focus:outline-none focus:border-gray-400"
                type="text" placeholder="Search" />

                <button className="px-5 py-2 border border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200">🔍</button>
            </div>
            {showSuggestions && (<div className="fixed bg-white py-2 px-5 rounded-lg w-114  border-bg-gray-100 shadow-lg">
                <ul>
{                  suggestions.map( (s)=>(<li key={s} className="px-3 py-2 shadow-sm hover:bg-gray-100 ">🔍{s}</li>))  
}                </ul>
            </div>)}
        </div>
        <div className="flex col-span-1 justify-end">
            <img className="h-8 w-8 rounded-full cursor-pointer"src={YOUTUBE_USER} alt="user"/>
        </div>
    </div>
  )
}

export default Head;
