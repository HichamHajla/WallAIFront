import React from 'react'
import { Link } from "react-router-dom";
import logo  from "../assets/logo.jpg"

const Footer = () => {
  return (
    <div className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
    <Link to="/home"><img src={logo} alt="logo" className="w-28 object-contain"/></Link>
    <h3 className="object-contain"> © Wall AI 2023 </h3>
    <h2 className='font-bold max-sm:hidden'>Created By :<br/> <span className='font-bold text-[#6449ff] text-xl'>Hicham HAJLA<br/> & Ludovic LEVEQUE</span></h2>
    </div>
  )
}

export default Footer