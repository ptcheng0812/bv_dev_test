import styled from 'styled-components';

import style from './style.module.scss';

const Wrapper = styled.div`
  border: 3px solid black;
  border-radius: 10px;
  margin-top: 4rem;
  background: rgb(0,0,0);
  background: linear-gradient(21deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,100,1) 100%);
  color: white;
`;

const Description = styled.span`
  font-size: 13px;
  color: #c5c6c7;
`;

const BigText = styled.h3`
  color: #e9e9e9 ;

  &:hover,
  &:focus {
    color: #5e89e6;
  }
  &:active {
    color: #5e89e6;
  }
`;


const MiniBox = ({dataHead, dataDescription, img}) => {
  return (
    <Wrapper className={`${style.miniBoxWrapper} flex flex-row`}>
      <div className={`${style.overlay2}`}>
        <div className={` lex flex-col p-5`}>
          <div className="flex flex-row items-center">
            {img.toString().includes("planetlogo") ?
              <BigText className={`${style.BigText} w-3/4 mt-1`}>{dataHead}</BigText> :
              <BigText className={`${style.BigText} w-3/4 mt-1`}>{dataHead}</BigText>}
              <img src={img} alt="small_logo" width="40" height="1" className={style.logoImg}></img>
          </div>
          {img.toString().includes("planetlogo") ?
            <Description className="font-small mt-2">{dataDescription}</Description> : <Description className="font-small">{dataDescription}</Description>
          }
        </div>
        <div className="flex items-center mr-6">

        </div>
      </div>

    </Wrapper>
  )
}

export default MiniBox;
