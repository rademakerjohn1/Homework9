// Requiring and configuring dotenv and requiring axios
const axios = require("axios");
require("dotenv").config();

// Retrieves username from Github API based on user input
const api = {
  getUser(username) {
    return axios
      .get(
        `https://api.github.com/users/${username}?client_id=${
        process.env.CLIENT_ID
        }&client_secret=${process.env.CLIENT_SECRET}`
      )
      .catch(err => {
        console.log("User Not Found")
        process.exit(1);
      });
  }
};

// Exports module
module.exports = api;