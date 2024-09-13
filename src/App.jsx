import React, { useState } from 'react'

const App = () => {
  const [task, setTask] = useState("")
  const [data, setData] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    setData([...data,{task}])
    setTask('')    
  }
  let taskData = "No Task"

  const deleteHandler = (i)=>{
    let copyTask = [... data]
    copyTask.splice(i,1)
    setData(copyTask)
  }

  if(data.length>0){
    taskData=data.map((t,i)=>{
      return(
        <li key={i} className='flex justify-between items-center px-10 w-full'>   
        <div className='text-2xl font-bold  font-sans'>
        <h1>{t.task}</h1>
      </div> 
        <button 
        className='bg-red-500 text-white font-bold hover:bg-red-900 p-2 my-2 rounded-lg'
        onClick={()=> {deleteHandler(i)}}>Delete</button>
        </li>
      ) 
    }) 
  }
  return (
    <>
    <h1 className='bg-slate-300 p-3 m-auto font-extrabold text-center text-4xl'>Todo-List-React</h1>
    <form className='flex justify-center gap-5'
    onSubmit={submitHandler}>
    <input 
    className='rounded-lg h-10 p-5 my-3  text-center border-2' 
    type="text"
    placeholder='Enter Task Here' 
    value={task}
    onChange={(e)=>{setTask(e.target.value)}
  }/>
    <button
    disabled
    className='hover:border-black hover:bg-blue-500 my-3 rounded-lg p-2 bg-blue-700 text-white font-bold'>Add Todo</button>
    </form>
    <hr />
    <div>
      <ul>
        {taskData}
      </ul>
    </div>
    </>
  )
}

export default App