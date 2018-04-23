const axios = require('axios').default;

module.exports = ({ baseUrl, verbose, headers }) => {
  return axios.create({
    baseURL: baseUrl,
    headers
  });
};
