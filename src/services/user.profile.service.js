import axios from "axios";
//import authHeader from "../helper/auth-header";

const API_URL = "http://localhost:8080/api/";

class UserProfileService {

    getAllUserDetails(email, phone, linkedin,twitter) {
        
        let addProp = "";
        if(email!==""){
            addProp = {email}; 
        }
        if(phone!==""){
            addProp = {...addProp,phone};
        }
        if(linkedin!==""){
            addProp = {...addProp,linkedin};
        }
        if(twitter!==""){
            addProp = {...addProp,twitter};
        }
        

        const request = addProp;
        console.log(request);

        return axios
            .post(API_URL + "getUserDetails",request/*,{ headers: authHeader() }*/)
            .then((response) => { 
                return response;
            });
    }
}

export default new UserProfileService();