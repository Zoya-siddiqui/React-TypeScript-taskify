import React, { useRef } from 'react'

interface Props {
    todo : string,
    setTodo: React.Dispatch<React.SetStateAction<String>>
    handleAdd : (e : React.SyntheticEvent)=>void
}

const InputFeild: React.FC<Props> = ({todo , setTodo , handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    console.log(todo)
  return (
    <div>
      <form onSubmit={(e)=>{
        handleAdd(e);
       
        inputRef.current?.blur()
      }

      } className='flex relative  items-center '>
        <input type='text'   ref={inputRef}
 value={todo} onChange={(e)=> setTodo(e.target.value)}className='bg-white  focus:outline-none border w-60  md:w-80  px-2  py-3 border-white rounded-t-xl rounded-b-xl ' placeholder='Enter a task' >
      </input>
      <button type='submit' className='size-10 absolute shadow-2xl mr-1  right-0 bg-blue-900 rounded-full  text-white font-bold  '>Go</button>
      </form>
    </div>
  )
}

export default InputFeild
