let d = new Date();

export let dayString = d.toLocaleDateString().slice(0, -5).split('/').join(' / ');

let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

export let day = days[d.getDay()]; 
export let month = months[d.getMonth()];
export let seconds = d.getSeconds();
export let date = d.getDate();
export let suffix = '';
  
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


