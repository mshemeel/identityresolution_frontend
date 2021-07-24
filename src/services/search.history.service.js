import axios from "axios";

const API_URL = "http://localhost:8080/api/";

class SearchHistoryService{
    getAllSearchHistory(){
        return axios.get(API_URL+"/allSearchHistory");
    }

    getUserDetailsByHistoryID(historyID){
        return axios.get(API_URL+"getHistoryById/"+historyID);
    }
}

export default new SearchHistoryService();