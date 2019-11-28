export const formatDate = date => {
  let day = date.getDate();
  if (day < 10) {
    day = `0${day}`;
  }

  let month = date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  return `${day}/${month}/${date.getFullYear()}`;
};

export const formatTime = date => {
  return `${date.getHours()}:${date.getMinutes()}`;
};
