import styled from 'styled-components';

import style from './style.module.scss';
import radius from './radius.png';

const Wrapper = styled.div`
  border: 3px solid black;
  border-radius: 10px;
  margin-top: 4rem;
  background: rgb(0,0,0);
  background: linear-gradient(21deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 67%, rgba(0,0,93,1) 100%);
  color: white;
`;

const MiniBox = ({dataHead, dataDescription}) => {
  return (
    <Wrapper className="flex flex-row">
      <div className="flex flex-col p-5">
        <h4>{dataHead}</h4>
        <p>{dataDescription}</p>
      </div>
      <div className="flex items-center mr-6">
        <img src={radius} alt="small_logo" width="40" height="1" className={style.logoImg}></img>
      </div>
    </Wrapper>
  )
}

export default MiniBox;
