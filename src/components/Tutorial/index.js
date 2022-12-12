import { useState } from "react";
import styled from 'styled-components';

const sourceData = [
  { headerText: "This is A Dummy Head 1", mainText: "Once you have an innovation culture, even those who are not scientists or engineers - poets, actors, journalists - they, as communities, embrace the meaning of what it is to be scientifically literate. They embrace the concept of an innovation culture. They vote in ways that promote it. They don't fight science and they don't fight technology.", subText: "Table is the best way to show complex data matrix"},
  { headerText: "This is A Dummy Head 2", mainText: "Private enterprise in the history of civilization has never led large, expensive, dangerous projects with unknown risks. That has never happened because when you combine all these factors, you cannot create a capital market valuation of that activity.", subText: "Look up planet details on Tess"},
  { headerText: "This is A Dummy Head 3", mainText: "In science, if you do not do it, somebody else will. Whereas in art, if Beethoven did not compose the Ninth Symphony", subText: "Analysis on data can be comparable "}
];

const TutorialHeader = styled.div`
  background: rgb(0,0,64);
  background: linear-gradient(21deg, rgba(0,0,64,1) 0%, rgba(0,0,0,1) 37%);
  color: white;
`;

const Tutorial = () => {

  const [selectedId, setSelectedId] = useState(0);

  return (
    <div className="flex flex-col border-2 rounded-lg mb-44">
      <TutorialHeader className="p-3 tutorial-header border-b-2"><h3 className="mt-2 ml-1">Tutorials on Features</h3></TutorialHeader>
      <div className="tutorial-content flex flex-col m-4 border-1 rounded-lg">
        {sourceData && sourceData.map((data, i) => {
          return (
            <div className="tutorial-single flex flex-col" key={i}>
              <div className="tutorial-single-header p-3 border-b-2 flex justify-between items-center" onClick={() => {
                selectedId !== null ? setSelectedId(null) : setSelectedId(i);
                }}><h6>{data?.headerText}</h6>{selectedId === i ? <i class="fa-solid fa-chevron-down"></i> : <i class="fa-solid fa-chevron-right"></i>}</div>
                { selectedId === i && (
                  <div className="tutorial-single-content p-3 flex flex-col gap-1">
                    <p>{data?.mainText}</p>
                    <span>{data?.subText}</span>
                    <div className="tutorial-single-bottom p-3 flex justify-end"><button className="btn btn-primary p-2">Check this out</button></div>
                  </div>
                )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tutorial;
