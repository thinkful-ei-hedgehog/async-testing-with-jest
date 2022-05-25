//Making Requests
//1. Where am I making the request to?
const url = `http://localhost:5000/constellations`;
//2. How am I making the request
const axios = require('axios');

function getConstellationById(id) {
    //3. What type of request (get, post, put, delete)? & make the request
   return axios.get(`${url}/${id}`).then((resp) => resp)
   .catch(console.error);
}

module.exports = getConstellationById;