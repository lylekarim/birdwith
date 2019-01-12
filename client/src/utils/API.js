import axios from "axios";

export default {
  
    // Gets google birders
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
  }
};
