'use client';

import Link from 'next/link'
export default function Nav (){

  return (
    <div className="navbar bg-white  text-black ">
    <div className="flex-1">
      <a href="/" className="btn btn-ghost text-xl">Nouns DBNB</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 flex gap-4">
        <Link className="text-lg my-auto " href={'/login'}>Login</Link>
        <Link className="text-lg my-auto " href={'/list'}>List Home</Link>
        <Link className="text-lg my-auto bg-[#f0c84f] px-6 py-2 rounded-md " href={'/book'}>Book Home</Link>
        
      </ul>
    </div>
  </div>
  )
}
