import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios'

export function getUserName(userLogin: String) {
  axios
    .get(`https://api.github.com/users/${userLogin}`)
    .then(function (response: AxiosResponse) {
      const userName = response.data.name
      return userName
    })
}
