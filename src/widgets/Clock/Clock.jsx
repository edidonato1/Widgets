import { numbers } from './numbers';
import { timeArray } from '../../components/Date/dateHelpers';
console.log(numbers[1][1])


export default function Clock() {
  return (
    <div id="clock-main">
      {timeArray.map(n => 
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