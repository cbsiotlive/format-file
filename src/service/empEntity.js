import axios from "axios";
const API_URL = "http://utkarsh.z-pass.in";

class empEntity {

    getAllEmp() {
        return axios.get(API_URL + "/read.php");
    }

    setEmp(data) {
        return axios.post(API_URL + "/create.php", data);
    }

    searchEmp(searchTerm) {
        return axios.post(API_URL + "/search.php", {
            search_term: searchTerm,
        });
    }

    // New method to read a single item by ID
    readSingle(id) {
        return axios.post(API_URL + "/readSingle.php", {
            id: id,
        });
    }

}

const empEntityInstance = new empEntity();

export default empEntityInstance;
