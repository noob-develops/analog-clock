const hoursEl = document.querySelector('.arrow .arrow--1');
const minutesEl = document.querySelector('.arrow .arrow--2');
const secondsEl = document.querySelector('.arrow .arrow--3');

const updateClock = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hoursDeg = (hours / 12) * 360;
  console.log(hours, minutes, seconds);
  hoursEl.style.transform = `rotate(${hoursDeg}deg)`;
  const minutesDeg = (minutes / 60) * 360;
  minutesEl.style.transform = `rotate(${minutesDeg}deg)`;
  const secondsDeg = (seconds / 60) * 360;
  secondsEl.style.transform = `rotate(${secondsDeg}deg)`;

  setTimeout(updateClock, 1000);
};

updateClock();
