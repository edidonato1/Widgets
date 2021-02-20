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