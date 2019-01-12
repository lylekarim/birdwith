import axios from "axios";

export default {
  
    // Gets google birds
    search: function(query) {
      return axios.get("https://www.googleapis.com/birds/v1/volumes?q=" + query + "&projection=lite&maxResults=5");
    },


  // Gets all birds
  getBirds: function() {
    return axios.get("/api/birds");
  },
  // Gets the bird with the given id
  getBird: function(id) {
    return axios.get("/api/birds/" + id);
  },
  // Deletes the bird with the given id
  deleteBird: function(id) {
    return axios.delete("/api/birds/" + id);
  },
  // Saves a bird to the database
  saveBird: function(birdData) {
    return axios.post("/api/birds", birdData);
  }
};
