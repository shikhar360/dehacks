'use client';

export default function Nav (){

  return (
    <div className="navbar bg-white  text-black ">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">Nouns DBNB</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><a>Login</a></li>
        <li>
          <details>
            <summary>Bookings</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
              <li><a>Your Bookings</a></li>
              <li><a>List Your Home</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
  )
}
