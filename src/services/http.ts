import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL

axios.interceptors.response.use(_null => _null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error)
  }

  return Promise.reject(error);
});

const setJwt = (jwt: string) => axios.defaults.headers.common['x-auth-token'] = jwt

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
}

export default http;