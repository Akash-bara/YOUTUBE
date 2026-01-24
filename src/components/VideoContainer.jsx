import { useEffect, useState } from "react"
import {  YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos ]= useState([]);
  useEffect(() => {
    getVideos();
  },[]);
  const getVideos = async () => {
const data = await fetch(YOUTUBE_VIDEO_API);
const json = await data.json();
setVideos(json.items) ; 
}
  
  return (
    <div className="
        grid gap-4 p-4
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
      ">
{videos.map((video)=>(<Link key={video.id} to={"/watch?v="+video.id}><VideoCard  info={video}/></Link>))}    </div>
  )
}

export default VideoContainer;
