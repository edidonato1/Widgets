import { useEffect, useState } from 'react';
import { ClockContainer } from './ClockStyles';
import { numbers } from './numbers';
import { seconds, makeTimeArray } from '../../components/Date/dateHelpers';


export default function Clock() {
  const [timeArr, setTime] = useState([]);

  useEffect(() => {
    setTime(makeTimeArray(new Date))
    // when component mounts, set timer for remaining seconds in the minute being displayed
    setTimeout((() => setTime(makeTimeArray(new Date))), (60 - seconds) * 1000)
  }, []);

  useEffect(() => {
    // when clock refreshes, return interval to update component every minute
    setInterval((() => setTime(makeTimeArray(new Date))), 60000)
  }, [timeArr]);

  return (
    <ClockContainer>
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
          <p className="am-pm">am</p>
          <p className="am-pm">pm</p>
        </div>
      </div>
    </ClockContainer>
  )
}