import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
        <hr />
        <div>
            <ul className='flex md:flex-row flex-col gap-4 items-center justify-center mt-5'>
                <li>
                    <a className='hover:text-white duration-200 hover:bg-pink-500 hover:rounded-xl px-3 py-1' href="/">Home</a>
                </li>
                <li>
                    <a className='hover:text-white duration-200 hover:bg-pink-500 hover:rounded-xl px-3 py-1' href="/course">courses</a>
                </li>
                <li>
                    <a className='hover:text-white duration-200 hover:bg-pink-500 hover:rounded-xl px-3 py-1' href="Contact">contact</a>
                </li>
                <li>
                    <a className='hover:text-white duration-200 hover:bg-pink-500 hover:rounded-xl px-3 py-1' href="#">About us</a>
                </li>
            </ul>
        </div>
        <div>
            <ul className='flex md:flex-row flex-col gap-4 items-center justify-center'>
                <li>
                <BsTwitterX />
                </li>
                <li>
                <IoLogoYoutube />
                </li>
                <li>
                <FaSquareFacebook />
                </li>
            </ul>
        </div>
        <p className='flex justify-center'>copyright 2024- All right reserved by SKM industries pvt Ltd.</p>
    </footer>
  )
}

export default Footer