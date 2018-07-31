import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    CancelStatic,
    CancelTokenStatic,
} from 'axios'

import { RestypedBase, RestypedIndexedBase, RestypedRoute } from 'restyped'

// tslint:disable-next-line:interface-name
export interface TypedAxiosRequestConfig<
    API extends RestypedIndexedBase,
    Path extends Extract<keyof API, string>,
    Method extends Extract<keyof API[Path], string>,
    RouteDef extends RestypedRoute = API[Path][Method]
> extends AxiosRequestConfig {
    url?: Path
    method?: Method
    params?: RouteDef['query']
    data?: RouteDef['body']
}

// tslint:disable-next-line:interface-name
export interface TypedAxiosResponse<
    API extends RestypedIndexedBase,
    Path extends Extract<keyof API, string>,
    Method extends Extract<keyof API[Path], string>,
    RouteDef extends RestypedRoute = API[Path][Method]
> extends AxiosResponse {
    data: RouteDef['response']
    config: TypedAxiosRequestConfig<API, Path, Method>
}

// tslint:disable-next-line:interface-name
export interface TypedAxiosInstance<API extends RestypedBase = any>
    extends AxiosInstance {
    request<
        Path extends Extract<keyof API, string>,
        Method extends Extract<keyof API[Path], string>
    >(
        config: TypedAxiosRequestConfig<API, Path, Method>
    ): Promise<TypedAxiosResponse<API, Path, Method>>

    get<Path extends Extract<keyof API, string>>(
        url: Path,
        config?: TypedAxiosRequestConfig<API, Path, any>
    ): Promise<TypedAxiosResponse<API, Path, any>>

    delete<Path extends Extract<keyof API, string>>(
        url: Path,
        config?: TypedAxiosRequestConfig<API, Path, any>
    ): Promise<TypedAxiosResponse<API, Path, any>>

    head<Path extends Extract<keyof API, string>>(
        url: Path,
        config?: TypedAxiosRequestConfig<API, Path, any>
    ): Promise<TypedAxiosResponse<API, Path, any>>

    post<Path extends Extract<keyof API, string>>(
        url: Path,
        data?: API[Path]['POST']['body'],
        config?: TypedAxiosRequestConfig<API, Path, any>
    ): Promise<TypedAxiosResponse<API, Path, any>>

    put<Path extends Extract<keyof API, string>>(
        url: Path,
        data?: API[Path]['PUT']['body'],
        config?: TypedAxiosRequestConfig<API, Path, any>
    ): Promise<TypedAxiosResponse<API, Path, any>>

    patch<Path extends Extract<keyof API, string>>(
        url: Path,
        data?: API[Path]['PATCH']['body'],
        config?: TypedAxiosRequestConfig<API, Path, any>
    ): Promise<TypedAxiosResponse<API, Path, any>>
}

// tslint:disable-next-line:interface-name
export interface TypedAxiosStatic<API extends RestypedBase = any>
    extends TypedAxiosInstance<API> {
    <
        Path extends Extract<keyof API, string>,
        Method extends Extract<keyof API[Path], string>
    >(
        config: TypedAxiosRequestConfig<API, Path, Method>
    ): Promise<TypedAxiosResponse<API, Path, Method>>

    <
        Path extends Extract<keyof API, string>,
        Method extends Extract<keyof API[Path], string>
    >(
        url: Path | string,
        config?: TypedAxiosRequestConfig<API, Path, Method>
    ): Promise<TypedAxiosResponse<API, Path, Method>>

    Cancel: CancelStatic
    CancelToken: CancelTokenStatic

    create<T extends API>(config?: AxiosRequestConfig): TypedAxiosInstance<T>
    isCancel(value: any): boolean
    all<T>(values: Array<T | Promise<T>>): Promise<T[]>
    spread<T, R>(callback: (...args: T[]) => R): (array: T[]) => R
}

const TypedAxios: TypedAxiosStatic = axios as any

export default TypedAxios
