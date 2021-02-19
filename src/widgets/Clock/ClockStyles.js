import styled from 'styled-components';

export const ClockContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 30px;
  border: 3px solid black;
  background: #212121;
  border-radius: 30px;
  box-shadow: inset 0px 0px 10px #35a3a3;

  
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
    background: #35a3a3;
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
    color: #35a3a3;
    text-shadow: 0px 0px  1px lightgray;
  }

  
`



