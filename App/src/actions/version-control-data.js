import axios from 'axios';

export const sendData = (payload) => {
  axios({
    url: '/',
    method: 'POST',
    data: payload,
  })
    .then(() => {
      console.log('Data sent to the server');
    })
    .catch(() => {
      console.log('Data sending error');
    });
};

export function axiosGetData() {
  // create a promise for the axios request
  const promise = axios.get('/data');
  // using .then, create a new promise which extracts the data
  const dataPromise = promise.then((response) => response.data);
  console.log('Data received', dataPromise);
  // return it
  return dataPromise;
}
