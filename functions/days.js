  const countDownDate = new Date("Aug 1, 2018").getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));

export default days;
