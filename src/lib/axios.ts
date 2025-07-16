import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { getEnvVar } from '../utils/helpers';

/**
 * Create an axios instance with interceptors for request and response
 * @param baseURL the API's baseURL
 * @returns {AxiosInstance} AxiosInstance
 */
export const createInstance = (baseURL?: string): AxiosInstance => {
  // Create an axios instance
  const instance = axios.create({
    baseURL: baseURL || getEnvVar('VITE_BASE_URL'),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  // Configure the request interceptors of axios instance
  instance.interceptors.request.use(
    async (config) => {
      // get token
      const token = undefined;

      // if token is not null, set the Authorization header
      if (token) {
        // set the Authorization header
        (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => Promise.reject(error),
  );

  // Configure the response interceptors of axios instance
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    },
  );
  return instance;
};

// Create an axios instance with the baseURL from the environment variable for App
const instance = createInstance();

/**
 * Create a get request function
 * @template T the type of the response data
 * @template P the type of the query parameters
 * @param endPoint the API's endpoint
 * @param queryParams the query parameters to be sent with the request
 * @param config the axios request config
 * @returns {Promise<AxiosResponse<T>>} the response data
 */
const getInstance = async <T = any, P extends object = Record<string, any>>(
  endPoint: string,
  queryParams?: P,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  const res: AxiosResponse<T> = await instance.get(endPoint, { ...(config ?? {}), params: queryParams });
  return res;
};

/**
 * Create a post request function
 * @template T the type of the response data
 * @template D the type of the object data
 * @param endPoint the API's endpoint
 * @param data the data to be sent with the request
 * @param config the axios request config
 * @returns {Promise<AxiosResponse<T>>} the response data
 */
const postInstance = async <T = any, D extends object = Record<string, any>>(
  endPoint: string,
  data?: D,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  const res: AxiosResponse<T> = await instance.post(endPoint, data, { ...(config ?? {}) });
  return res;
};

/**
 * Create a put request function
 * @template T the type of the response data
 * @template D the type of the object data
 * @param endPoint the API's endpoint
 * @param data the data to be sent with the request
 * @param config the axios request config
 * @returns {Promise<AxiosResponse<T>>} the response data
 */
const putInstance = async <T = any, D extends object = Record<string, any>>(
  endPoint: string,
  data?: D,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  const res: AxiosResponse<T> = await instance.put(endPoint, data, { ...(config ?? {}) });
  return res;
};

/**
 * Create a patch request function
 * @template T the type of the response data
 * @template D the type of the object data
 * @param endPoint the API's endpoint
 * @param data the data to be sent with the request
 * @param config the axios request config
 * @returns {Promise<AxiosResponse<T>>} the response data
 */
const patchInstance = async <T = any, D extends object = Record<string, any>>(
  endPoint: string,
  data?: D,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  const res: AxiosResponse<T> = await instance.patch(endPoint, data, { ...(config ?? {}) });
  return res;
};

/**
 * Create a DELETE request function with full flexibility:
 * - can send query params
 * - can send optional body (e.g. for bulk delete)
 * @template T the response data type
 * @template Q the query params type
 * @template B the request body type
 * @param endPoint the API endpoint
 * @param options optional query/body/config
 * @returns {Promise<AxiosResponse<T>>} the response data
 */
const deleteInstance = async <T = any, Q extends object = Record<string, any>, B extends object = Record<string, any>>(
  endPoint: string,
  options?: {
    queryParams?: Q;
    body?: B;
    config?: AxiosRequestConfig;
  },
): Promise<AxiosResponse<T>> => {
  const res: AxiosResponse<T> = await instance.request({
    url: endPoint,
    method: 'DELETE',
    params: options?.queryParams,
    data: options?.body,
    ...(options?.config ?? {}),
  });

  return res;
};

/**
 * Create a head request function
 * @template T the type of the response data
 * @template D the type of the query parameters
 * @param endPoint the API's endpoint
 * @param queryParams the query parameters to be sent with the request
 * @param config the axios request config
 * @returns {Promise<AxiosResponse<T>>} the response data
 */
const headInstance = async <T = any, D extends object = Record<string, any>>(
  endPoint: string,
  queryParams?: D,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  const res: AxiosResponse<T> = await instance.get(endPoint, { ...(config ?? {}), params: queryParams });
  return res;
};

/**
 * Create an OPTIONS request function
 * Use to check what methods are allowed, CORS info, etc.
 *
 * @template T the expected headers (rarely used)
 * @param endPoint the API endpoint
 * @param config optional Axios config
 * @returns {Promise<AxiosResponse<T>>} full Axios response (not just .data!)
 */
const optionsInstance = async <T = any>(endPoint: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  const res = await instance.options(endPoint, {
    ...(config ?? {}),
  });
  return res;
};

export const https = {
  get: getInstance,
  post: postInstance,
  put: putInstance,
  patch: patchInstance,
  delete: deleteInstance,
  head: headInstance,
  options: optionsInstance,
};
