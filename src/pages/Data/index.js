import { useState, useEffect, Suspense, useCallback } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

import { fetchData } from "../../actions/fetch";
import { isFloat } from '../../helpers/helper';
import { temperatureConvert } from '../../helpers/helper';
import { roundUpFloat } from '../../helpers/helper';
import { Sphere } from '../../components/Sphere';
import { Loader } from '../../components/Loader';

import ThreeDimentionalGrid from './ThreeDimentionalGrid.png';
import rulerX from './rulerX.png';
import rulerY from './rulerY.png';
import dots from './dots.png';
import style from './style.module.scss';

// const searchBar = styled.div`
//   background: rgb(0,0,64);
//   background: linear-gradient(21deg, rgba(0,0,64,1) 0%, rgba(0,0,0,1) 37%);
// `;

const Data = () => {
  const [data, setData] = useState(null);
  const [sortedData, setSortedData] = useState(null);
  const [results, setResults] = useState();
  const [searchType, setSearchType] = useState();
  const [selectedPlanet, setSelectedPlanet] = useState();
  const [isZoom, setIsZoom] = useState(false);
  const [isRotate, setIsRotate] = useState(true);
  const [axis, setAxis] = useState("");

  const columns = [
  { field: 'pl_name', headerName: 'Planet Name', width: 200 },
  { field: 'pl_rade', headerName: 'Planet Radius (earth units)', width: 200 },
  { field: 'st_teff', headerName: 'Temperature (℃)', width: 200 },
  { field: 'releasedate', headerName: 'Release Date', width: 200 },
  ];

  const ToggleZoom = useCallback(() => {
    if (isZoom) {
      setIsZoom(false)
    }
    else {
      setIsZoom(true)
    }
  }, [isZoom])

  const ToggleRotate = useCallback(() => {
    if (isRotate) {
      setIsRotate(false)
    }
    else {
      setIsRotate(true)
    }
  }, [isRotate])

  // console.log("selectedAxis", axis)


  useEffect(() => {
    fetchData().then((res) => {setData(res)})
  }, [])

  useEffect(() => {
    if(data) {
      //sort data by releasedate
      const orderedData = data.slice().sort(function(a,b){
        return new Date(b.releasedate) - new Date(a.releasedate)
      })

      //add id in objects so the set of data can be used in MUI table
      for (let i = 0; i < orderedData.length; i++) {
        orderedData[i].id = i;
      }

      if (results) {
        const filteredData = orderedData.filter((element) => isFloat(element[searchType]) ?  element[searchType].toString().includes(results): element[searchType].includes(results))
        // console.log("filteredData>>>", filteredData)
        setSortedData(filteredData)
      } else {
        // console.log("orderedData>>>>>>>>>>>>>", orderedData)
        setSortedData(orderedData)
      }
    }
  }, [data, results, searchType])

  // console.log("results", results)
  // console.log("searchType", searchType)
  // console.log("selectedPlanet", selectedPlanet[0])
  // console.log("isRotate >>>", isRotate)

  return (
    <div className="data-container w-4/5 ml-80">
      <div className="w-full mt-8 ml-5">
        <div className="grid grid-cols-2 gap-12">
          <div className="leftContainer wrapper">
            <div className={`${style.filterSearch} relative py-3 px-3 flex justify-start gap-3 items-center rounded`}>
              <img src={dots} alt="dots" width="800" height="100" className={style.dots}/>
              <select className={`${style.search} select select-bordered max-w-xs` }onChange={(e) => {setSearchType(e.target.value)}}>
                <option disabled selected>Pick Search Filter</option>
                {columns && columns.map(column => (
                  <option value={column.field}>
                    {column.headerName}
                  </option>
                ))}
              </select>
              {searchType && (
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => {
                  setResults(e.target.value);
                }}/>
              ) || <input type="text" placeholder="Please select what you want to search" class="input input-bordered w-full max-w-xs" disabled />}
            </div>
            <div className={`white ${style.table}`} style={{ height: 700, width: '100%' }}>
              {data && sortedData && (
                <DataGrid
                  style={{ zIndex: 2 }}
                  rows={sortedData}
                  columns={columns}
                  pageSize={10}
                  rowsPerPageOptions={[10]}
                  onSelectionModelChange={(ids) => {
                    const selectedIDs = new Set(ids);
                    const selectedRows = sortedData.filter((row) =>
                      selectedIDs.has(row.id)
                    );
                    setSelectedPlanet(selectedRows);
                  }}
                  // sx={{ color: "white", "& .MuiMenuItem-root": {
                  //   color: "white"
                  // } }}
                  // componentsProps={{
                  // pagination: {
                  //       sx: {
                  //         color: "white",
                  //         "& .MuiMenuItem-root": {
                  //           color: "white"
                  //         }
                  //       }
                  //     }
                  // }}
                  // pagination
                />
              )}
            </div>
          </div>
          <div className={`relative border-1 rounded-lg flex flex-row py-5 ${style.globeContainer}`}>
            <div className="flex flex col w-2/3">
              <div className="globeContainerHeader flex justify-between items-center text-white px-5 absolute gap-5 " style={{zIndex: '100'}}>
                <p>{selectedPlanet ? selectedPlanet[0]?.pl_name.toString() : 'Planet Name'}</p>
                <div className="flex flex-row items-center text-[13px]" >
                  <p className="mr-2">Enable Zoom</p>
                  {
                    isZoom && (<input type="radio" name="radio-1" className="radio mb-3" checked onClick={()=> {ToggleZoom()}}/>) ||
                    <input type="radio" name="radio-1" className="radio mb-3 bg-white" onClick={()=> {ToggleZoom()}}/>
                  }
                </div>
                <div className="flex flex-row items-center text-[13px]">
                  <p className="mr-2">Enable Rotate</p>
                  {
                    isRotate && (<input type="radio" name="radio-2" className="radio mb-3" checked onClick={()=> {ToggleRotate()}}/>) ||
                    <input type="radio" name="radio-2" className="radio mb-3 bg-white" onClick={()=> {ToggleRotate()}}/>
                  }
                  {/* <input type="radio" name="radio-1" className="radio mb-2" checked /> */}
                </div>
                <select className="select max-w-xs text-black mb-3" onChange={(e) => {setAxis(e.target.value)}} >
                  <option selected value="Both">Both X and Y axis</option>
                  <option value="X">X</option>
                  <option value="Y">Y</option>
                  <option value="None">No X and Y axis</option>
                </select>
              </div>

              <img src={rulerY} alt="rulerY" width="55" className={`${style.rulerY} ${axis !== 'None' ? (axis !== 'X' ? '' : 'invisible') : 'invisible'}`}/>

              <img src={ThreeDimentionalGrid} alt="3d Grid" width="400" height="550" className={style.grid}/>

              <Canvas className={style.sphere}>
                <Suspense fallback={<Loader/>}>
                  <Sphere selectedPlanet={selectedPlanet} toggleZoom={isZoom} toggleRotate={isRotate}/>
                </Suspense>
              </Canvas>

              {/* <div className={style.loader}><Loader/></div> */}
            </div>

            <div className={`flex justify-start text-white ${style.planetDetails} mx-4 w-1/3`}>
              <ul className={`relative ${style.list} p-3`}>
                <li>Radius (earth unit):</li>
                <li>{selectedPlanet ? selectedPlanet[0]?.pl_rade?.toString() : '70'}</li>
                <li className="mt-3">Mass:</li>
                <li>{selectedPlanet ? roundUpFloat(selectedPlanet[0]?.pl_bmasse)?.toString() : '76.9956'}</li>
                <li className="mt-3">Temperature (℃):</li>
                <li>{selectedPlanet ? temperatureConvert(selectedPlanet[0]?.st_teff)?.toString()  : '76.9956'}</li>
                <li className="mt-3">Orbital Period (days):</li>
                <li>{selectedPlanet ? roundUpFloat(selectedPlanet[0]?.pl_orbper)?.toString()  : '21.954'}</li>
                <li className="mt-3">Release Date:</li>
                <li>{selectedPlanet ? selectedPlanet[0]?.releasedate?.toString() : '2022/11/31'}</li>
                <li className="mt-8">Provided by TESS</li>
              </ul>
            </div>

            <img src={rulerX} alt="rulerX" width="411" className={`${style.rulerX} ${axis !== 'None' ? (axis !== 'Y'  ? '' : 'invisible') : 'invisible'}`}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Data;
