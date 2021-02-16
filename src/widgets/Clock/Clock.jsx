import { numbers } from './numbers';
import { seconds } from '../../components/Date/dateHelpers';
import { useEffect, useState } from 'react';


export default function Clock() {
  const [timeArr, setTime] = useState([]);

  const makeTimeArray = d => {
    let hours = d.getHours() >= 13 ? (d.getHours() - 12) : d.getHours();
    let minutes = d.getMinutes().toString();
    let left = hours.toString().split('').map(n => Number(n));
    let right = minutes < 10 ? [0, minutes] : minutes.toString().split('').map(n => Number(n))
    return [...left, 10, ...right]
  }

  useEffect(() => { 
    setTime(makeTimeArray(new Date)) 
    // when component mounts, set timer for remaining seconds in the minute being displayed
    setTimeout((() => setTime(makeTimeArray(new Date))), (60 - seconds) * 1000)
  }, []);

  useEffect(() => {
    // when clock refreshes, return interval to update component every minute
    setInterval((() =>  setTime(makeTimeArray(new Date))), 60000)   
  }, [timeArr]);

  return (
    <div id="clock-main">
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
    </div>
  )
}