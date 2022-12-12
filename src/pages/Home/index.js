import { useState, useEffect } from 'react';

import { fetchData } from '../../actions/fetch';
import { findLargestDate } from '../../helpers/helper';
import { findLargestRadius } from '../../helpers/helper';

import MainBox from '../../components/MainBox';
import MiniBox from '../../components/MiniBox';
import style from './style.module.scss';
import Tutorial from '../../components/Tutorial';

import radius from '../../components/MiniBox/radius.png';
import planetlogo from '../../components/MiniBox/planetlogo.png';
import timetablelogo from '../../components/MiniBox/timetablelogo.png';

const Home = () => {
  const [data, setData] = useState(null);
  const [ largestDate, setLargestDate] = useState(null);
  const [ largestRadius, setLargestRadius] = useState(null);

  const miniBoxDataDescription = ["Planets", "Largest radius", "Recently updated"];

  useEffect(() => {
    fetchData().then((res) => {setData(res)})
  }, [])

  useEffect(() => {
    if (data) {
      setLargestDate(findLargestDate(data)?.releasedate)
      setLargestRadius(findLargestRadius(data).toString())
      // console.log("data>>>>>>>Home>>>>", findLargestRadius(data))
    }
  }, [data])

  // console.log("largestDate>>>>>", largestDate)
  return (
    <div className={`container-sm ${style.main}`}>
      <div className="mainWrapper flex flex-row gap-20 w-full">
        <div className="flex flex-col w-2/3">
          <MainBox/>
          <div className="flex flex-row gap-4">
            <MiniBox dataHead={data?.length.toString()} dataDescription={miniBoxDataDescription[0]} img={planetlogo}/>
            <MiniBox dataHead={largestRadius} dataDescription={miniBoxDataDescription[1]} img={radius}/>
            <MiniBox dataHead={largestDate} dataDescription={miniBoxDataDescription[2]} img={timetablelogo}/>
          </div>
        </div>
        <div className="w-1/3">
            <Tutorial/>
          </div>
      </div>

    </div>
  )
};

export default Home;
