import { List } from '../utils/constant'
import Button from './Button'

const ButtonList = () => {  
  return (
    <div  className="w-full overflow-x-auto no-scrollbar">
      <div className="flex flex-nowrap">

   {List.map((button)=>(<Button  key={button} name={button}/>))} 
    </div>
    </div>
  )
}

export default ButtonList
