import axios from "axios";

export default {

  // Search  for the term provided 
  getUser: (query) => {
    return axios.post("/api/birders/signin", query);
  },
  createUser: (query) => {
    return axios.post("/api/birders/signup", query);
  },
  checkAuth: function (query) {
    //  console.log("Query in API = " + JSON.stringify(query));
    return axios.post("/api/birders/verify", query);
  },

  //searches birder db
  searchBirders: function (query) {
    console.log("query from search= " + JSON.stringify(query));
    return axios.get("/api/birders" , {
      params: {
       query
      }
    })
  },

  // Gets all birders
  getBirders: function () {
    return axios.get("/api/birders");
  },
  // Gets the birder with the given id
  getBirder: function (id) {
    return axios.get("/api/birders/" + id);
  },
  // Deletes the birder with the given id
  deleteBirder: function (id) {
    return axios.delete("/api/birders/" + id);
  },
  // Saves a birder to the database
  saveBirder: function (birderData) {
    return axios.post("/api/birders", birderData);
  },

  // Sends an email
  sendEmail: function (emailData) {
    return axios.post("/api/email", emailData);
  }


};
