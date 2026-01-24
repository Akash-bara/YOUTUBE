
const Button = ({name}) => {
  return (
    <div>
     <button className="
        px-3 py-2 m-2
        bg-gray-100
        rounded-full
        text-sm font-medium
        hover:bg-gray-200
        transition
        whitespace-nowrap
      ">
  {name}
</button>

    </div>
  )
}

export default Button
