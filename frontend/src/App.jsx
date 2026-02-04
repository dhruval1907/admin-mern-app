import React, { useEffect, useState } from 'react'
import axios from "axios";
const App = () => {

  const [product, setproduct] = useState([])
  // get api fethcing the data
  function fetchData() {
    axios.get("http://localhost:3000/api/notes")
      .then((res) => {
        setproduct(res.data.notes);
      })
  }
  // prevent the re-render
  useEffect(function () {
    fetchData()
  }, [])

  return (
    <div className='h-screen w-full ' style={{ background: "linear-gradient(lightblue,pink,crimson,black)", }}>
      <marquee behavior="" direction="" ><p className=' text-5xl font-bold text-black/50' style={{ marginTop: "20px" }}>ADMIN PANEL</p> </marquee>
      <form className='flex items-center flex-col justify-center gap-10 w-full'>
        <div className='flex gap-10 items-center '>
          <label htmlFor="" className='text-2xl'>Product : </label>
          <input type="text" className='border-2 border-white ' style={{ padding: "0.5rem 3rem" }} />
          <label htmlFor="" className='text-2xl'>ProductImage : </label>
          <input type="text" className='border-2 border-white ' style={{ padding: "0.5rem 3rem" }} />
        </div>
        <div className='flex items-center gap-10 justify-between w-[50%]'>
          <label htmlFor="" className='text-2xl'>Amount : </label>
          <input type="text" className='border-2 border-white ' style={{ padding: "0.5rem 3rem" }} />
          <label htmlFor="" className='text-2xl'>Price : </label>
          <input type="text" className='border-2 border-white ' style={{ padding: "0.5rem 3rem" }} />
        </div>
        <button className='h-15 w-50 bg-teal-700 text-white/50 '>add item</button>
      </form>
      <div className='h-[78%] w-full' style={{ padding: "2rem" }}>
        <div className='notes flex flex-wrap'></div>
      </div>
    </div>
  )
}

export default App