let seconds = new Date().getSeconds();

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
  seconds,
  makeTimeArray
}