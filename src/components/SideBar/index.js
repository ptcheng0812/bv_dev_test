import style from './style.module.scss';

const SideBar = () => (
  <div className={style.sidebar}>
    <div
      className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
    >
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <i class="fa-solid fa-screwdriver-wrench"></i>
          <h1 className="font-bold text-gray-200 text-[18px] ml-3 mt-2">Cosmo Planets Search Tool</h1>
          <i
            className="bi bi-x cursor-pointer ml-28 lg:hidden"
          ></i>
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>

      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={() => {
        window.location.replace('/');
      }}>
        <i class="fa-solid fa-house"></i>
        <a className="text-[15px] ml-4 text-gray-200 font-bold link" href="/">Home</a>
      </div>

      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={() => {
        window.location.replace('/data');
      }}>
        <i class="fa-solid fa-globe"></i>
        <a className="text-[15px] ml-4 text-gray-200 font-bold link" href='/data'>Exo Planets</a>
      </div>
      <div className="my-4 bg-gray-600 h-[1px]"></div>

      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <i class="fa-solid fa-right-from-bracket"></i>
        <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
      </div>
    </div>

  </div>
);

export default SideBar;
