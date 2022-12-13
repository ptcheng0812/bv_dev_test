/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import style from './style.module.scss'


const Nav = () => {
  const [ keyword, setKeyword] = useState("");

  const handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    window.location.replace(`/data/data?keyword=${keyword}`);
  }
  }

  const handleOnClick = () => {
    if(keyword){
      window.location.replace(`/data/data?keyword=${keyword}`);
    } else {
      return;
    }
  }

  return (
    <nav className="flex justify-between  text-white w-screen">
      <div className="px-5 xl:px-9 xl:py-5 flex w-full items-center justify-between">
        <div
          className={`${style.topSearch} flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-100 text-black ml-[365px] mt-2`}
        >
          <i class="fa-solid fa-magnifying-glass" onClick={handleOnClick}></i>
          <input
            type="text"
            placeholder="Search"
            className="text-[18px] ml-4 w-full bg-transparent focus:outline-none px-10"
            onChange={(e) => { setKeyword(e.target.value) }}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="hidden xl:flex items-center space-x-12 items-center duration-300 mr-10">
          <a className="hover:text-gray-200 " href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </a>
          <a className="flex items-center hover:text-gray-200 " href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
          </a>
          <a className="flex items-center hover:text-gray-200 " href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
