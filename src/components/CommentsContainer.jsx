import { Comment_data } from "../utils/constant"
import Comments from "./comments"

const CommentsList = ({comments})=>{
    return comments.map((comment,index)=>(
    <div key={index} >
        <Comments data={comment}/>
        <div className="pl-5  border-l border-b-gray-300-gray  ml-4">
           <CommentsList comments={comment.replies}/>

        </div>
    </div>
    ));

}
const CommentsContainer = () => {
  return (

    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentsList comments={Comment_data}/>
    </div>
  )
}

export default CommentsContainer
