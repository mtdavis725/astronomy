import axios from "axios";

// GET request using axios with error handling
const apodData = {};
const element = document.querySelector('#get-request-error-handling .axios');

function axiosFetch() {
axios.get('https://api.nasa.gov/planetary/apod?api_key=q8Tae8I9G0Bc4qusMpLSYcxbG3R0469sowolCtPF')
    .then(response => element.innerHTML = response.data.total)
    .catch(error => {
        element.parentElement.innerHTML = `Error: ${error.message}`;
        console.error('There was an error!', error);
    });
  }

export default axiosFetch;