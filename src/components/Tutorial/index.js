import { useState } from "react";
import styled from 'styled-components';

const sourceData = [
  { headerText: "Main Search Bar", mainText: "Top search bar on nav can search by keywords from Exo planets data set. This is a quick and efficient way to query what planet you are looking for.", subText: "Try to type something int the box and click search."},
  { headerText: "Exo Planets Tables", mainText: "If you would like to look up what is the recently added planets and their radius, temperature etc, you can click the See Table button or Exo Planet Table button on Nav to access", subText: "Look up planet details on Tess"},
  { headerText: "Single Planet Panel", mainText: "Click each row of the table, you will see how the panel update and showcase each planet.", subText: "Analysis on data can be comparable "}
];

const TutorialHeader = styled.div`
  background: rgb(0,0,64);
  background: linear-gradient(21deg, rgba(0,0,83,1) 1%, rgba(0,0,0,1) 69%);
  color: white;
`;

const TutorialMain = styled.div`
  background-image: url("https://t3.ftcdn.net/jpg/04/11/75/88/360_F_411758816_R2mBjthRIlJvC3T5UeyMeRgjVONzl0z3.jpg");
  background-size: cover;
  font-family: Georgia, serif;
`;

const TutoirialContent = styled.div`
  background: white;
  color: black;
`;

const Button = styled.div`
  background: rgba(0,0,83,1);
`;

const Tutorial = () => {

  const [selectedId, setSelectedId] = useState(0);

  return (
    <TutorialMain className="flex flex-col border-2 rounded-lg mb-44">
      <TutorialHeader className="p-3 tutorial-header border-b-2"><h3 className="mt-2 ml-1">Tutorials on Features</h3></TutorialHeader>
      <TutoirialContent className="tutorial-content flex flex-col m-4 border-1 rounded-lg">
        {sourceData && sourceData.map((data, i) => {
          return (
            <div className="tutorial-single flex flex-col" key={i}>
              <div className="tutorial-single-header p-3 border-b-2 flex justify-between items-center" onClick={() => {
                selectedId !== null ? setSelectedId(null) : setSelectedId(i);
                }}><h6>{data?.headerText}</h6>{selectedId === i ? <i class="fa-solid fa-chevron-down"></i> : <i class="fa-solid fa-chevron-right"></i>}</div>
                { selectedId === i && (
                  <div className="tutorial-single-content p-3 flex flex-col gap-1   duration-700 border-b-2">
                    <p>{data?.mainText}</p>
                    <span>{data?.subText}</span>
                    <div className="tutorial-single-bottom p-3 flex justify-end items-center"><Button className="btn p-2"><a className="text-white " href="/data">Check this out</a></Button></div>
                  </div>
                )}
            </div>
          )
        })}
      </TutoirialContent>
    </TutorialMain>
  )
}

export default Tutorial;
