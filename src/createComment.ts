import {getToken} from './getToken'
import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios'
import * as core from '@actions/core'

export async function createComment(
  organizationId: number,
  accountId: number,
  activityId: number,
  creatorEmail: string,
  creatorPassword: string,
  content: string
) {
  var data = JSON.stringify({
    query: `mutation{
        createComment(
            accountId: ${accountId}, #obrigatório
            id: ${activityId}, #obrigatório
            object: "activity", #obrigatório
            content: "${content}", #obrigatório | Quando for string dentro de variável com $ usar tbm os ""
            createdBy: "${creatorEmail}", #opcional, pode ser id ou email
        ) {
            id,
            content,
            createdAt,
            createdByApi,
            author {
                id,
                name,
                email
            },
            registeredBy {
                id,
                name,
                email
            }
            users {
                id,
                name,
                email
            }
  
        }
    }`,
    variables: {}
  })

  var newToken = await getToken(creatorEmail, creatorPassword)
  var config: AxiosRequestConfig = {
    method: 'post',
    url: 'https://app.artia.com/graphql',
    headers: {
      OrganizationId: organizationId.toString(),
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + newToken
    },
    data: data
  }

  axios(config)
    .then(function (response: AxiosResponse) {
      console.log('\n Axios .Then main.ts \n')
      console.log(
        '\n JSON.stringify(response.data) => ',
        JSON.stringify(response.data),
        '\n'
      )
      const resObj = response.data
      if (resObj.data != null) {
        console.log('Sucesso! Atividade comentada')
      } else {
        console.log('\n response.config => ', response.config, '\n')
        console.log('\n response.status => ', response.status, '\n')
        console.log('\n response.headers => ', response.headers, '\n')
        core.setFailed(resObj.errors[0])
      }
    })
    .catch(function (error: AxiosError) {
      console.log('\n error.config => ', error.config, '\n')
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx

        console.log('\n error.response.data => ', error.response.data, '\n')

        console.log('\n error.response.status => ', error.response.status, '\n')

        console.log(
          '\n error.response.headers => ',
          error.response.headers,
          '\n'
        )
        return error.response
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js

        console.log('\n error.request => ', error.request, '\n')
        return error.request
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('\n error.message => ', error.message, '\n')
        return error.message
      }
    })
}
