import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: "https://fortnite-api.com/v1",
    headers: {'Content-Type': 'application/json'}
});

function getBanners() {

   return  axiosInstance.get('/banners');

}

export default getBanners;