import { numbers } from './numbers';
console.log(numbers[1][1])

let time = [1, 2,10, 2, 3];

export default function Clock() {
  return (
    <div id="clock-main">
      {time.map(n => 
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