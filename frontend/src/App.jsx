import React, { useEffect, useState } from 'react'
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";

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
  // form handeling
  function formHandle(e) {
    e.preventDefault()

    const { product, price, amount, image } = e.target.elements

    const newProduct = {
      product: product.value,
      price: price.value,
      image: image.value,
      amount: amount.value,
    }

    axios.post("http://localhost:3000/api/notes", newProduct)
      .then((res) => {
        setproduct((prev) => [...prev, res.data.note])

      })
  }

  function deleteHandle(pro_id) {
    axios.delete("http://localhost:3000/api/notes/" + pro_id)
      .then(() => {
        fetchData()
      })
  }

  return (
    <div className='h-screen w-full ' style={{ background: "linear-gradient(lightblue,pink,crimson,black)", }}>
      <marquee behavior="" direction="" ><p className=' text-5xl font-bold text-black/50' style={{ marginTop: "20px" }}>ADMIN PANEL</p> </marquee>
      <form className='flex items-center flex-col justify-center gap-10 w-full' onSubmit={formHandle}>
        <div className='flex gap-10 items-center '>
          <label htmlFor="" className='text-2xl'>Product : </label>
          <input name='product' type="text" className='border-2 border-white ' style={{ padding: "0.5rem 3rem" }} />
          <label htmlFor="" className='text-2xl'>ProductImage : </label>
          <input name='image' type="text" className='border-2 border-white ' style={{ padding: "0.5rem 3rem" }} />
        </div>
        <div className='flex items-center gap-10 justify-between w-[50%]'>
          <label htmlFor="" className='text-2xl'>Amount : </label>
          <input name='amount' type="text" className='border-2 border-white ' style={{ padding: "0.5rem 3rem" }} />
          <label htmlFor="" className='text-2xl'>Price : </label>
          <input name='price' type="text" className='border-2 border-white ' style={{ padding: "0.5rem 3rem" }} />
        </div>
        <div className='flex gap-10 '>
          <button className='h-15 w-50 bg-teal-700 text-white/50 text-2xl rounded-2xl active:scale-90'>add item</button>
        </div>
      </form>
      <div className='h-[68%] w-full overflow-y-auto' style={{ padding: "2rem" }}>
        <div className='notes flex flex-wrap h-full'>
          {product.map((elem, indx) => {
            return <div className='h-120 w-80 bg-zinc-500/40 rounded-2xl ' style={{ marginRight: "100px" }} key={indx}>
              <div className='h-full w-full flex flex-col items-center gap-10 text-white' style={{ padding: "1.5rem" }}>
                <div className='h-50 w-70'>
                  <img src={elem.image} alt="" className='h-full w-full object-cover rounded-2xl' />
                </div>
                <div className='flex flex-col gap-5 items-center '>
                  <h1>Product : {elem.product}</h1>
                  <h1>product price : {elem.price}</h1>
                  <h1>quantity left : {elem.amount}</h1>
                </div>
                <div className='flex justify-between w-full' style={{ padding: "0rem 1rem" }}>
                  <div className='h-12 w-12 bg-red-800 rounded-2xl flex items-center justify-center text-2xl cursor-pointer ' onClick={() => {
                    deleteHandle(elem._id)
                  }}>
                    <MdDeleteForever />
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App