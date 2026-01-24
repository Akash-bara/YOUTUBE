

const VideoCard = ({info}) => {
  return (
    <div className="flex flex-col w-full max-w-90">
      <img className="w-full rounded-xl object-cover" src={info?.snippet?.thumbnails?.medium?.url} alt="thumbnail"/>
    <ul>
      <li className="font-semibold text-sm line-clamp-2">{info?.snippet?.title}</li>
      <li className="text-gray-600 text-xs mt-1">{info?.snippet?.channelTitle}</li>
      <li className="text-gray-600 text-xs">{info?.statistics?.viewCount} views</li>
    </ul>
    </div>
  )
}

export default VideoCard
