import styled from 'styled-components';
import Clock from './Clock';

export const ClockContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 10px;
  border: 3px solid black;
  background: #212121;
  padding: 20px;
  border-radius: 30px;

  
  #clock-skew {
    transform: skewX(-10deg);
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
    box-shadow: 1px 1px darkgreen;
  }

  .on {
    background: limegreen;
  }

  .off {
    box-shadow: inset 1px 1px black;
  }

  .am-pm-container {
    
  }
`



