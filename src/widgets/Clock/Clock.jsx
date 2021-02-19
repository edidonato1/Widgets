import { useEffect, useState } from 'react';
import { ClockContainer, SelectStyles } from './ClockStyles';
import { numbers } from './numbers';
import { colorArray } from './colors';
import { seconds } from '../../components/Date/dateHelpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';



export default function Clock() {
  const [timeArr, setTime] = useState([]);
  const [am, setAm] = useState();
  const [clockColor, setClockColor] = useState('#77ff41');
  const [showColors, setShowColors] = useState(false);


  useEffect(() => {
    // when component mounts, set time
    setTime(makeTimeArray(new Date()))
    // set time again at start of next minute to ensure accuracy
    setTimeout((() => setTime(makeTimeArray(new Date))), (60 - seconds) * 1000)
    setAm(new Date().getHours() >= 13 ? false : true)
  }, [clockColor]);

  useEffect(() => {
    // when clock refreshes, return interval to update component every minute
    setInterval((() => setTime(makeTimeArray(new Date()))), 60000)
  }, [timeArr]);

  const makeTimeArray = d => {
    let h = d.getHours();
    let m = d.getMinutes();
    let hours = d.getHours() >= 13 ? (h - 12) : h;
    if (m % 60 === 0) {
      setAm(h >= 13 ? false : true) // only look to reset am/pm toggle at each hour
    }
    let minutes = d.getMinutes().toString();
    let left = hours < 10 ? [11, hours] : hours.toString().split('').map(n => Number(n));
    let right = minutes < 10 ? [0, minutes] : minutes.toString().split('').map(n => Number(n))
    return [...left, 10, ...right]
  }

  const handleClick = () => {
    // setClockColor(colors.coral)
  }


  return (
    <>
      <ClockContainer clockColor={clockColor}>
        <div id="clock-skew">
          {timeArr.map(n =>
            <div className={n < 10 ? "analog-digit-container" : "colon-container"}>
              {numbers[n].map(row =>
                <div className="row">
                  {row.map(num =>
                    <div className={num === 1 ? "block on" : "block off"}>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          <div id="am-pm-container">
            <p className={am ? "light-up" : null}>am</p>
            <p className={!am ? "light-up" : null}>pm</p>
          </div>
        </div>
        <SelectStyles showColors={showColors}>
          <FontAwesomeIcon icon={faPalette} className="color-picker" onClick={() => setShowColors(!showColors)} />
          {colorArray.map(c =>
              <FontAwesomeIcon
                icon={faPalette}
                className="color-picker"
                style={{ color: c, zIndex: clockColor === c ? "1" : "0" }}
                onClick={() => {
                  setShowColors(true)
                  setClockColor(c)
                }}
              />
          )}
      </SelectStyles>
      </ClockContainer>
    </>
  )
}