import { useEffect, useState } from 'react';
import ColorSelect from './ColorSelect';
import { ClockContainer } from './ClockStyles';
import { numbers } from './helpers/numbers';
import { seconds, makeTimeArray } from './helpers/timeHelpers';


export default function Clock() {
  const [timeArr, setTime] = useState([]);
  const [am, setAm] = useState();
  const [clockColor, setClockColor] = useState('#77ff41');

  useEffect(() => {
    // when component mounts, set time
    setTime(makeTimeArray(new Date()));
    // set time again at start of next minute to ensure accuracy
    setTimeout((() => setTime(makeTimeArray(new Date(), setAm))), (60 - seconds) * 1000);
    setAm(new Date().getHours() >= 13 ? false : true);
  }, [clockColor]);

  useEffect(() => {
    // when clock refreshes, return interval to update component every minute
    setInterval((() => setTime(makeTimeArray(new Date(), setAm))), 60000);
  }, [timeArr]);


  return (
    <>
      <ClockContainer clockColor={clockColor}>
        <div id="clock-skew">
          {timeArr.map(n =>
            <div className={n < 10 ? "analog-digit-container" : "colon-container"}>
              {numbers[n].map(row => // value of time array matches index of corresponding "number" matrix
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
        <ColorSelect
          clockColor={clockColor}
          setClockColor={setClockColor}
        />
      </ClockContainer>
    </>
  );
};