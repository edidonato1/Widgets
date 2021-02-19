import styled from 'styled-components';

export const ClockContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 30px;
  border: 3px solid black;
  background: #212121;
  border-radius: 30px;
  box-shadow: inset 0px 0px 10px ${({ clockColor }) => clockColor};

  transition: .8s;
  * {
    transition: .8s;
  }
  
  #clock-skew {
    transform: skewX(-7deg);
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .analog-digit-container {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
  }

  .colon-container { 
    margin: 0 5px; 
  }

  .row {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 25px;
  }

  .block {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    margin: 2px;
    box-shadow: 0px 0px  2px lightgray;
  }

  .on {
    background: ${({ clockColor }) => clockColor};
  }

  .off {
    box-shadow: inset 1px 1px 1px #090909;
    background: #191919;
  }

  #am-pm-container {
    transform: skew(7deg);
    margin-left: 20px;
    font-size: 1.5em;
    color: #131313;
    text-shadow: inset 1px 1px black;
    font-family: 'Space Mono';
    letter-spacing: 2px;

  }




  .light-up {
    color: ${({ clockColor }) => clockColor};
    text-shadow: 0px 0px  1px lightgray;
  }

  
`


export const SelectStyles = styled.div`
display: flex;
width: 100%;
width: 20px;
margin-top: 10px;
margin-bottom: -5px;
margin: 10px 0px -5px 5px;

.color-picker  {
  font-size: 20px;
  border-radius: 10px;
  margin: ${({showColors}) => showColors ? "0 5px" : "0 -10px"};
}


`
