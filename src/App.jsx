import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submithandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({ title, details })
    setTask(copyTask)
    console.log(task)
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen bg-black text-white lg:flex'>
      <form onSubmit={(e) => { submithandler(e) }} className='flex flex-col items-start gap-4 lg:w-1/2  p-10 font-medium'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>
        <input className='px-5 py-2 w-full border-2 rounded outline-none ' type="text" placeholder='Enter Tsak Heading'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }} />
        <textarea className='px-5 py-2 w-full border-2 rounded h-32 outline-none' type="text" placeholder='Write Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }} />
        <button className='bg-white text-black px-5 py-2 active:scale-95 w-full rounded outline-none'>Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 p-10 mt-5 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {
            return <div key={idx} className='flex flex-col justify-between h-52 w-32 rounded-2xl p-4 bg-white text-black py-9 px-4 pb-4'>
              <div>

                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight font-medium text-xs text-gray-700'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='bg-red-600 w-full b-1 cursor-pointer active:scale-95 py-1 text-xs text-white rounded font-bold'>Delete </button>
            </div>
          })
          }
        </div>
      </div>
    </div>
  )
}

export default App
