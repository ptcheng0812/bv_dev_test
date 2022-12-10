import { useState, useEffect, Suspense } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Canvas } from '@react-three/fiber';

import { fetchData } from "../../actions/fetch";
import { isFloat } from '../../helpers/helper';
import { Sphere } from '../../components/Sphere';

import ThreeDimentionalGrid from './ThreeDimentionalGrid.png';
import style from './style.module.scss';

const Data = () => {
  const [data, setData] = useState(null);
  const [sortedData, setSortedData] = useState(null);
  const [results, setResults] = useState();
  const [searchType, setSearchType] = useState();
  const [selectedPlanet, setSelectedPlanet] = useState();

  useEffect(() => {
    fetchData().then((res) => {setData(res)})
  }, [])

  const columns = [
  { field: 'pl_name', headerName: 'Planet Name', width: 200 },
  { field: 'pl_rade', headerName: 'Planet Radius (earth units)', width: 200 },
  { field: 'releasedate', headerName: 'Release Date', width: 200 },
];

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
  // console.log("selectedPlanet", selectedPlanet)

  return (
    <div className="data-container w-4/5 ml-80">
      <div className="w-full mt-8 ml-5">
        <div className="grid grid-cols-2 gap-12">
          <div className="leftContainer wrapper">
            <div className="py-3 px-1 flex justify-start gap-3 items-center searchBarContainer">
              <select className="select select-bordered max-w-xs" onChange={(e) => {setSearchType(e.target.value)}}>
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
            <div style={{ height: 700, width: '100%' }}>
              {data && sortedData && (
                <DataGrid
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
                />
              )}
            </div>
          </div>
          <div className={`relative border-1 rounded-lg flex flex-col p-5 ${style.globeContainer}`}>
              <p className="flex justify-center text-white">Dummy Name</p>
              <img src={ThreeDimentionalGrid} alt="3d Grid" width="450" height="600" className={style.grid}/>

              <Canvas className={style.sphere}>
                <Suspense fallback={null}>
                  <Sphere selectedPlanet={selectedPlanet}/>
                </Suspense>
              </Canvas>

              <p className="flex justify-center text-white">Text</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Data;
