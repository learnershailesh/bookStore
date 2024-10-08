import React, { useEffect, useState } from 'react'
import Cards from './Caard';
import axios from "axios";
import {Link} from 'react-router-dom';
function Course() {
 const [book, setBook] = useState([])
 useEffect(()=>{
  const getBook = async () =>{
    try {
     const res = await axios.get("http://localhost:4002/book");
     console.log(res.data);
     setBook(res.data)
    } catch (error) {
      console.log(err);
    }
  }
  getBook();
 }, []);
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 p-1'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl '>We're delight to have you 
                <span className='text-pink-500'>Here! :)</span>
            </h1>
            <p className='mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam expedita culpa molestias dicta possimus esse error aperiam nihil accusantium deleniti distinctio ut sapiente, necessitatibus eveniet veniam dolore voluptas? Atque, quibusdam ea laborum dicta obcaecati accusantium aliquam unde accusamus magnam adipisci aperiam vel, inventore dolorem dignissimos consequuntur praesentium pariatur laboriosam minus.</p>
            
            <Link to="/">
                <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                book.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
      </div>
    </>
  )
}

export default Course