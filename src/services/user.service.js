import {axiosService} from "./axios.service";
import {urls} from "../configs";

const UserService = {

    getAll:()=>axiosService.get(urls.users),
    getById:(id)=>axiosService.get(`${urls.users}/${id}`),
    сreate:(user)=>axiosService.post(urls.users,user),
    updateById: (id, car) => axiosService.put(`${urls.users}/${id}`, car)

}

export {
    UserService
}