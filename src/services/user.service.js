import axios from 'axios';

let axiosInstance = axios.create({

    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {}

});

function getUsers() {
    return axiosInstance.get('/users')
}

function getUser(id) {
    return axiosInstance.get('/users/'+id)
}



export {
    getUsers,
    getUser
};

