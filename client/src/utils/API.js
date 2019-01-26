import axios from "axios";

export default {
  
     // Search  for the term provided 
    getUser: (query) => {
      return axios.post("/api/birders/signin", query);
    },
    createUser: (query) => {
      return axios.post("/api/birders/signup", query);
    },
    checkAuth: function(query) {
      console.log("Query in API = " + JSON.stringify(query));
      return axios.post("/api/birders/verify", query);
    },
  
  
    // // Gets google birders
    search: function(query) {
      return axios.get("https://www.googleapis.com/birders/v1/volumes?q=" + query + "&projection=lite&maxResults=5");
    },


  // Gets all birders
  getBirders: function() {
    return axios.get("/api/birders");
  },
  // Gets the birder with the given id
  getBirder: function(id) {
    return axios.get("/api/birders/" + id);
  },
  // Deletes the birder with the given id
  deleteBirder: function(id) {
    return axios.delete("/api/birders/" + id);
  },
  // Saves a birder to the database
  saveBirder: function(birderData) {
    return axios.post("/api/birders", birderData);
  },

  // Sends an email
  sendEmail: function(emailData) {
    return axios.post("/api/email", emailData);
  }


};
