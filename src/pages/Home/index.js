import { useState, useEffect } from 'react';

import { fetchData } from '../../actions/fetch';
import { findLargestDate } from '../../helpers/helper';
import { findLargestRadius } from '../../helpers/helper';

import MainBox from '../../components/MainBox';
import MiniBox from '../../components/MiniBox';
import style from './style.module.scss';

const Home = () => {
  const [data, setData] = useState(null);
  const [ largestDate, setLargestDate] = useState(null);
  const [ largestRadius, setLargestRadius] = useState(null);

  const miniBoxDataDescription = ["Planets found", "Largest radius", "Recently updated"];

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
      <div>
        <h1>Cosmos</h1>
        <p>Once you have an innovation culture, even those who are not scientists or engineers - poets, actors, journalists - they, as communities, embrace the meaning of what it is to be scientifically literate. They embrace the concept of an innovation culture. They vote in ways that promote it. They don't fight science and they don't fight technology.</p>
        <p>Private enterprise in the history of civilization has never led large, expensive, dangerous projects with unknown risks. That has never happened because when you combine all these factors, you cannot create a capital market valuation of that activity.</p>
        <p>In science, if you don't do it, somebody else will. Whereas in art, if Beethoven didn't compose the 'Ninth Symphony,' no one else before or after is going to compose the 'Ninth Symphony' that he composed; no one else is going to paint 'Starry Night' by van Gogh.</p>
      </div>
      <MainBox/>
      <div className="flex flex-row gap-4">
        <MiniBox dataHead={data?.length.toString()} dataDescription={miniBoxDataDescription[0]}/>
        <MiniBox dataHead={largestRadius} dataDescription={miniBoxDataDescription[1]}/>
        <MiniBox dataHead={largestDate} dataDescription={miniBoxDataDescription[2]}/>
      </div>
    </div>
  )
};

export default Home;
