import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import { FaBookOpen } from "react-icons/fa";


function Navbar() {
  return (
    <div>
           <nav className='flex items-center justify-between p-6 text-white  bg-gradient-to-r from-emerald-600 to-teal-500 px-20'>
                <a className='flex items-center gap-5' href='/'>
                <FaBookOpen className='text-4xl' />
                       <p className='font-[Boldonse] text-[19px]'>5 - Maktab books</p>
                </a>
                  <ul className='flex items-center gap-11 font-[Merriweather_Sans]'>
                     <NavLink to={"/"}>Bosh sahifa</NavLink>
                     <NavLink to={"/about"}>Biz haqimizda</NavLink>
                     <NavLink to={"/books"}>Kitoblar</NavLink>
                     <NavLink to={"/news"}>Yangiliklar</NavLink>
                     <NavLink to={"/contect"}>Aloqa</NavLink>
                  </ul>
                  <div>
                       <Link to={'/dashboard/login'} className='font-[Merriweather_Sans] p-3 rounded-3xl border-2 px-10'>Kirish</Link>
                  </div>
           </nav>
    </div>
  )
}

export default Navbar
