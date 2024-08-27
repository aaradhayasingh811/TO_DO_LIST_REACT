import React from 'react'


const Task = (props) => {

    const deletetask = (e) =>{
        props.onDelete(props.id);  
      }

    const edittask = (e) =>{
        props.onEdit(props.id);
    }

  return (
    <div>
        <div className="task mx-auto p-2 text-left text-base flex border-2 border-slate-400 my-5 rounded">
      <div className="w-full flex ">
      <p className='items-center'>{props.value}</p>
      </div>
      <div className="w-1/3 flex sm:flex-row flex-col space-between items-center">
      <button className='mx-auto p-2 rounded text-white bg-[#845ec2] my-2' onClick={edittask}>Edit</button>
      <button className='mx-auto p-2 rounded text-white bg-[#845ec2]'name="delete" onClick={deletetask}>Delete</button>
      </div>
   
    </div>
    </div>
  )
}

export default Task
