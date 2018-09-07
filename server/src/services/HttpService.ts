import { Service } from 'typedi';
import axios from 'axios';

export interface IConfig {
    params?: any;
    headers?: any;
    url?: string;
    method?: string;
    baseURL?: string;
    paramsSerializer?: (params: any) => string;
    data?: any;
    timeout?: number;
    withCredentials?: boolean;
}
@Service()
export class HttpService {
    get = (url: string, config: IConfig) => {
        return axios.get(url, config);
    };
    post = (url: string, data: any, config: IConfig) => {
        return axios.post(url, data, config);
    };
    put = (url: string, data: any, config: IConfig) => {
        return axios.put(url, data, config);
    };
    delete = (url: string, config: IConfig) => {
        return axios.delete(url, config);
    };
}
