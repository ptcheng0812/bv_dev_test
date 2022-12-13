import style from './style.module.scss';

const MainBox = () => {
  return (
    <div className={style.background}>
      <div className={`${style.mainBoxContainer}  pt-6 pl-6  rounded-lg cursor-pointer`} onClick={() => { window.location.replace('/data');}}>
        <div className="flex flex-col relative pointer-events-none">
          <h2>Hi,</h2>
          <p>Welcome to Cosmo Planet Search Tool. </p>
        </div>
        <div className={`flex justify-end pointer-events-none hover:pointer-events-auto`}>
          <button className={` border-white ${style.seeButton} cursor-pointer`} >
            See Table
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainBox;
