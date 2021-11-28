const FY = d => d.getFullYear();
const FM = d => d.getMonth() + 1;
const FD = d => d.getDate();

export const getReadableDate = (d) => {
  var timestamp = Date.parse(d);
  if (isNaN(timestamp)) {
    return '';
  }
  const dateObject = new Date(d);
  var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${FD(dateObject)} ${month[FM(dateObject)-1]} ${FY(dateObject)}`
}

export const getWelcomeText = (d) => {
  const x = d ? new Date(d) : new Date();
  const hours = x.getHours();
  if (hours > 4 && hours < 12) {
    return 'Morning';
  } else if (hours >= 12 && hours < 16) {
    return 'Afternoon';
  } else if (hours >= 16 && hours < 20 ) {
    return 'Evening';
  } return 'Night';
}