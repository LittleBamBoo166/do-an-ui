import axios from 'axios'
import { stringify } from 'qs'

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/relief-app/v1/',
})

axiosClient.interceptors.request.use(
  function (config) {
    const token = JSON.parse(localStorage.getItem('user')).accessToken;
    if (
      typeof token !== 'undefined' &&
      token &&
      !config.url.includes('X-Amz-Algorithm')
    ) {
      if (config.headers)
        config.headers['Authorization'] = 'Bearer ' + encodeURIComponent(token)
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (
      !error.config.headers['Authorization'] ||
      error.response.status === 401 ||
      error.response.status === 403
    ) {
      localStorage.clear();
      window.location.replace('http://localhost:3000/login');
    }
    return Promise.reject(error)
  }
)

class AxiosFetch {
  get(uri, params = {}) {
    const queryString = stringify(params)
    const uriWithQuery = `${queryString ? uri + '?' : uri}${queryString}`
    return axiosClient.get(uriWithQuery)
  }
  post(uri, body = {}) {
    return axiosClient.post(uri, body)
  }
  put(uri, body = {}, config = {}) {
    return axiosClient.put(uri, body, config)
  }
  delete(uri, body = {}) {
    return axiosClient.delete(uri, body)
  }
  patch(uri, body = {}) {
    return axiosClient.patch(uri, body)
  }
}

const AxiosService = new AxiosFetch()

export default AxiosService;
