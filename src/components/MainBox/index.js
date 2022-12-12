import style from './style.module.scss';

const MainBox = () => {
  return (
    <div className={`${style.mainBoxContainer} flex flex-col pt-6 pl-6  rounded-lg`}>
      <div className="flex flex-col">
        <h2>Hi,</h2>
        <p>Welcome to Cosmo Planet Search Tool</p>
      </div>
      <div className="flex justify-end">
        <button className={` border-white ${style.seeButton}`}>See Table</button>
      </div>
    </div>
  )
}

export default MainBox;
