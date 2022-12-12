import style from './style.module.scss';

const MainBox = () => {
  return (
    <div className={style.background}>
      <div className={`${style.mainBoxContainer}  pt-6 pl-6  rounded-lg`}>
        <div className="flex flex-col relative pointer-events-none">
          <h2>Hi,</h2>
          <p>Welcome to Cosmo Planet Search Tool</p>
        </div>
        <div className={`flex justify-end pointer-events-none`}>
          <button className={` border-white ${style.seeButton} pointer-events-none`}>See Table</button>
        </div>
      </div>
    </div>
  )
}

export default MainBox;
