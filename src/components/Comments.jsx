import { YOUTUBE_COMMENT_PIC } from "../utils/constant"

const Comments = ({data}) => {
   
  const {name,text,repiles}=data;
  
  return (
    <div>
      <div className="flex p-2 my-2 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100">
        <img className="w-8 h-8 m-3"src={YOUTUBE_COMMENT_PIC} alt="YOUTUBE_COMMENT_PIC" />
        <div className="px-1 py-1">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Comments
