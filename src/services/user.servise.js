import {axiosService} from "./axios.service";
import {urls} from "../configs";

const userService ={
    getAll: () => axiosService.get(urls.users),
    getById: (id) => axiosService.get(`${urls.users}/${id}`),
    create:(user)=>axiosService.post(urls.users,user),
    updatebyId:(id,user)=>axiosService.put(`${urls.users}/${id}`,user),
    delete:(id)=>axiosService.delete(`${urls.users}/${id}`)
}

export {
    userService
}