import axios from "axios";

const BASEURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "api-key=eafa397532be49299f095815f8165bde";

export default {
  searchArticles: function(query) {
    var CHAIN ="&page=5&q="+query.topic+"&begin_date="+query.start+"0101&end_date="+query.end+"1231&&newest";
    return axios.get(BASEURL + APIKEY +CHAIN)
       .then(function(response){
          var newResults = [];
          var alldata = response.data.response.docs;
          var counter = 0;
          if (alldata.length < 1){
            return null;
          }
          for(var i = 0; i < alldata.length; i++){

          if(counter > 4) {
            console.log(newResults);
            return newResults;
          }
          if(alldata[counter].headline.main && alldata[counter].pub_date && alldata[counter].web_url) {
            newResults.push(alldata[counter]);
            counter++;
          }
        }
        console.log(newResults);
        return newResults;
    });
  },

  getArticles: function() {
    return axios.get("/saved");
  },

  getArticle: function(id) {
    return axios.get("/saved/" + id);
  },
  deleteArticle: function(id) {
    return axios.delete("/saved/" + id);
  },
  saveArticle: function(articleData) {
    return axios.post("/saved", articleData);
  },
};
