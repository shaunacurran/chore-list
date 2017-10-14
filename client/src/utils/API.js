import axios from "axios";

export default {
    //USER APIs
    getUsers: function() {
        return axios.get("/api/users");
    },
    getUser: function(id) {
        return axios.get("/api/users/" + id);
    },
    deleteUser: function(id){
        return axios.delete("/api/users/" + id);
    },
    saveUser: function(userData){
        return axios.post("/api/users", userData);
    },

    //HOUSEHOLD APIs
    getHouseholds: function(){
        return axios.get("/api/households");
    },
    getHousehold: function(id) {
        return axios.get("/api/households/" + id);
    },
    deleteHousehold: function(id){
        return axios.delete("/api/households/" + id);
    },
    saveHousehold: function(householdData){
        return axios.post("/api/households", householdData);
    }//,
    
    //TASK APIs
    // getTasks: function(){
    //     return axios.get("/api/tasks");
    // },
    // getTask: function(id) {
    //     return axios.get("/api/tasks/" + id);
    // },
    // deleteTask: function(id){
    //     return axios.delete("/api/tasks/" + id);
    // },
    // saveTask: function(taskData){
    //     return axios.post("/api/tasks", taskData);
    // }
}