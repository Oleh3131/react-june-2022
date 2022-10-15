import {AxiosRes, axiosService} from "./axios.service";
import {IUser} from "../interfaces";
import {urls} from "../configs";

const userService = {
    getAll: (): AxiosRes<IUser[]> => axiosService.get(urls.users).then(value => value.data)
}

export {
    userService
}