import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios'
import * as core from '@actions/core'

export function getName(userLogin: String): Promise<string | AxiosError> {
  return axios
    .get(`https://api.github.com/users/${userLogin}`)
    .then(function (response: AxiosResponse) {
      const userName = response.data.name
      return userName
    })
}
