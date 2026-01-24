import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomNames } from '../utils/helperName';

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages)
    const [liveMessage, setLiveMessage] = useState("")
    useEffect(()=>{
        const i=setInterval(()=>{
            dispatch(
                addMessage({
                    name: generateRandomNames(),
                    message:generateRandomMessage(20),
                })
            )
        },2000)

        return () => clearInterval(i);
   },[])
  return (
 <> <div>
    <div>
    </div>
    <div className='w-full h-125 mb-2 ml-2 p-2 border border-black bg-gray-200 rounded-lg  overflow-y-scroll flex flex-col-reverse'>
    {chatMessages.map((c,i)=><ChatMessage key={i} name={c.name} message={c.message}/>)}
    </div>
    </div>
    <form
    onSubmit={(e)=>{
        e.preventDefault();
        dispatch(
            addMessage({
                name:"YOU",
                message:liveMessage
            })
        )
    }} 
    className='w-full p-2 ml-2 rounded-lg shadow-lg border border-black'>
        <input placeholder="Message " className="w-80"type="text" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>      <button className='px-2 ml-4 bg-gray-300 rounded-lg' >Submit</button>
    </form>
 </> 
  )
}

export default LiveChat
