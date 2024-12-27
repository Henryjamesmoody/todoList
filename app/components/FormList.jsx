import React, { useState } from 'react'

const FormList = () => {

   const formHandler=(e)=>{
    e.preventDefault();
    setDesc("")
    setTitle("")
    
    setMainTask([...mainTask,{title,desc}])
    console.log(mainTask)
   }

const deleteTask=(i)=>{
    let copy=[...mainTask]
    copy.splice(i,1)
    setMainTask(copy);
}   


   const [title, setTitle] = useState('')
   const [desc, setDesc] = useState('')
   const [mainTask, setMainTask] = useState([])
   let rendertask=<h2>no task avalibale</h2>;


   if(mainTask.length>0){
  rendertask= mainTask.map((t,i)=>{
    return <li key={{i}} className='flex gap-[20%] py-4 px-4 justify-start items-center border-b-2'>
        <h2 className='-me-[15%] font-bold text-xl bg-emerald-600 rounded-full text-white w-[2rem] text-center'>{i+1}</h2>
        <h1 className='text-xl font-semibold w-28'>{t.title}</h1>
        <h4>{t.desc}</h4>
        <button
        onClick={()=>{
            deleteTask(i);
        }
        }
        className='absolute right-16 px-5 py-2 bg-red-400 rounded-full hover:bg-red-500'>Delete</button>
        
    </li>
   });
}
   
  return (
    <>
    <form
    onSubmit={(e)=>{
        formHandler(e)
    }}>
    <div className='flex gap-[20%] p-10 pl-[10%] items-center flex-wrap'>
    <div>
    <h1 className='mt-2'>Title</h1>
    <input
     onChange={(e)=>{
        setTitle(e.target.value)
    }}
    value={title}
    placeholder='Enter Your Title'
     type="text" id="" 
     className='px-4 py-2 mt-2 border-2 border-zinc-300 rounded-lg w-[100%]'
     />
    </div>

    <div>
    <h1 className='mt-2'>Description</h1> 
    <input
    onChange={(e)=>{
        setDesc(e.target.value)
    }}
    value={desc}
    placeholder='Enter Your Title'
     type="text" id="" 
     className='px-4 py-2 mt-2 border-2 border-zinc-300 rounded-lg w-[120%]'
     />    
    </div>
    <button className='bg-cyan-200 px-4 py-2 rounded-md hover:bg-emerald-200 mt-2'>Add Task</button>
    </div>
    
    </form>
    <hr className='h-[1rem]' />
    <div className='p-8 bg-slate-100'>
        <ul>{rendertask}</ul>
    </div>
    </>
  )
}

export default FormList
