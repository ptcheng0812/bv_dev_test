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
            placeholder="Search by Planet Name"
            className="text-[18px] ml-4 w-full bg-transparent focus:outline-none px-10"
            onChange={(e) => { setKeyword(e.target.value) }}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="hidden xl:flex items-center space-x-12 items-center duration-300 mr-10">
          <a className="hover:text-gray-200 " href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          </a>
          <a className="flex items-center hover:text-gray-200 " href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </a>
          <a className="flex items-center hover:text-gray-200 " href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800 hover:text-gray-200" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
