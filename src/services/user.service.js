import {axiosService} from "./axios.service";
import {urls} from "../configs";


const userService={
    getAll: () => axiosService.get(urls.users),
    getById: (id) => axiosService.get(`${urls.users}/${id}`),
    create: (user) => axiosService.post(urls.users, user),
    updateById: (id, user) => axiosService.put(`${urls.users}/${id}`, user),
    deleteById:(id)=>axiosService.delete(`${urls.users}/${id}`)
}

export {
    userService
}