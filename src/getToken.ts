import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios'
import * as core from '@actions/core'

export function getToken(
  creatorEmail: string,
  creatorPassword: string
): Promise<string | AxiosError> {
  const data = JSON.stringify({
    query: `mutation{
      authenticationByEmail(email:"${creatorEmail}", password: "${creatorPassword}") {
      token
        }
      }`
  })

  const config: AxiosRequestConfig = {
    method: 'POST',
    url: 'https://app.artia.com/graphql',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  }

  return axios(config)
    .then(function (response: AxiosResponse) {
      // console.log(response.data);
      // console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.headers);
      // console.log(response.config);
      const resObj = JSON.parse(JSON.stringify(response.data))
      if (resObj.data != null) {
        const token: string = resObj.data.authenticationByEmail.token
        return token
      } else {
        core.setFailed(resObj.errors[0])
      }
    })
    .catch(function (error: AxiosError) {
      // console.log(error.config)
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
        return error.response
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
        return error.request
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
        return error.message
      }
    })
}
