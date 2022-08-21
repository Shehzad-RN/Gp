const timeStamp = new Date().getTime();
const yesterdayTimeStamp = timeStamp - 24 * 60 * 60 * 1000;
const yesterdayDate = new Date(yesterdayTimeStamp);
function getYesterdayDate() {
  return new Date(
    new Date().getTime() -
      24 * 60 * 60 * 1000 -
      24 * 60 * 60 * 1000 -
      24 * 60 * 60 * 1000 -
      24 * 60 * 60 * 1000
  ).getDate();
}

console.log(getYesterdayDate());
