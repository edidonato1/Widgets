let d = new Date();

let dayString = d.toLocaleDateString().slice(0, -5).split('/').join(' / ');

let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

let day = days[d.getDay()]; 
let month = months[d.getMonth()];
let seconds = d.getSeconds();
let date = d.getDate();

let suffix = '';
  
switch (true) {
  case date > 3 && date < 21:
    suffix = 'th';
    break;
  case date.toString().endsWith('1'):
    suffix = 'st';
    break;
  case date.toString().endsWith('2'):
    suffix = 'nd';
    break;
  case date.toString().endsWith('3'):
    suffix = 'rd';
    break;
  default:
    suffix = 'th';
}

const makeTimeArray = (d, callback) => {
  let h = d.getHours();
  let m = d.getMinutes();
  let hours = h >= 13 ? (h - 12) : h;
  if (m % 60 === 0) {
    callback(h >= 13 ? false : true) // only look to reset am/pm toggle at each hour
  }
  let left = hours < 10 ? [11, hours] : hours.toString().split('').map(n => Number(n));
  let right = m < 10 ? [0, m] : m.toString().split('').map(n => Number(n))
  return [...left, 10, ...right]
}

export {
  day,
  month,
  seconds,
  date,
  suffix,
  dayString,
  makeTimeArray
}