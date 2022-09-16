import axios from "axios";


const axiosInstance = axios.create({

    baseURL: "https://api.spacexdata.com/v3",
    headers: {'Content-Type': 'application/json'}
// -----в headers прописуємо який тип даних будемо передавати на сервер або отримувати-------
});


function getLaunches(){

    return axiosInstance.get('/launches');

}

export default getLaunches;