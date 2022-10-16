import {AxiosRes, axiosService} from "./axios.service";

import {IUser} from "../interfaces";
import {urls} from "../configs";

const userService ={
    getAll: (): AxiosRes<IUser[]> => axiosService.get(urls.users).then(value => value.data),
    create: (user:IUser): AxiosRes<IUser> => axiosService.post(urls.users, user),
    getById:(id:number):AxiosRes<IUser>=>axiosService.get(`${urls.users}/${id}`).then(value => value.data)
}

export {
    userService
}