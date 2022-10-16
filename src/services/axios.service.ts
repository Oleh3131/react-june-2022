import axios, {AxiosResponse} from "axios";

import {baseURL} from "../configs";

let axiosService = axios.create({baseURL});

type AxiosRes<T>=Promise<AxiosResponse<T>>

export {
    axiosService
}

export type {
    AxiosRes
}