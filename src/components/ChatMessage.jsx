import React from 'react'
import { YOUTUBE_CHAT_PIC } from '../utils/constant'
const ChatMessage = ({name , message}) => {
  return (
    <div className='flex items-center mb-2 shadow-sm'>  
      <img className="h-8 w-8 rounded-full cursor-pointer"src={YOUTUBE_CHAT_PIC} alt="user"/>
      <span className='font-bold px-2'>{name}: </span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
