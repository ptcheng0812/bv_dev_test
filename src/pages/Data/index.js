import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';


import { fetchData } from "../../actions/fetch";
import { isFloat } from '../../helpers/helper';

const Data = () => {
  const [data, setData] = useState(null)
  const [sortedData, setSortedData] = useState(null)
  const [results, setResults] = useState();
  const [searchType, setSearchType] = useState();

  useEffect(() => {
    fetchData().then((res) => {setData(res)})
  }, [])

  const columns = [
  { field: 'pl_name', headerName: 'Planet Name', width: 200 },
  { field: 'pl_rade', headerName: 'Planet Radius (earth units)', width: 200 },
  { field: 'releasedate', headerName: 'Release Date', width: 200 },
];

  // console.log("check>>>", columns[])

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

  return (
    <div className="data-container w-4/5 ml-80">
      <div className="w-full">
        <div className="p-3 flex justify-start gap-3 items-center">
          <h1>Data</h1>
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
              checkboxSelection
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Data;
