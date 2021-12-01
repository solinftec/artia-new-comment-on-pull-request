import * as core from '@actions/core'
import * as github from '@actions/github'
import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios'
//Functions
import {createComment} from './createComment'
import {getName} from './userInfo'

const payload = JSON.stringify(github.context.payload, undefined, 2) // Get the JSON webhook payload for the event that triggered the workflow//
const objPayload = JSON.parse(payload)
const organizationId = parseInt(core.getInput('organizationId')) //OrganizationId é o id da empresa/organização cadastrada no artia. (informado no main.yml do workflow)
const creatorEmail = core.getInput('creatorEmail') //Email criador do comentário (informado no main.yml do workflow).
const creatorPassword = core.getInput('creatorPassword') //Password (Váriavel de ambiente{sescrets.ARTIA_PASSWORD} informada no main.yml do workflow).
const pull_request = objPayload.pull_request

// const artiaUrl = pull_request.body
//   .split('Start Artia Link**> (')
//   .pop()
//   .split(')**End Artia Link')[0]
const artiaUrl = pull_request.body
  .split('Link da tarefa no Artia:[')
  .pop()
  .split('](')
  .pop()
  .split(')')[0]
const accountId = artiaUrl.split('/a/').pop().split('/f')[0]
const activityId = artiaUrl
  .split('/activities/')
  .pop()
  .split(artiaUrl.length)[0]
const ArtiaComment = pull_request.body
  .split('Start Artia Comment')
  .pop()
  .split('End Artia Comment')[0]
  //Remove "\" do comentário do Artia
  .replace(/\\/g, '/')
  .replace(/['"]+/g, "'")

console.log('\n OrganizationId =>', organizationId, '\n')
console.log('\n ActivityId =>', activityId, '\n')
console.log('\n ArtiaUrl =>', artiaUrl, '\n')
async function run(): Promise<void> {
  try {
    const userName = await getName(pull_request.user.login)

    const content = `Comentário criado por: ${userName} a partir de um Pull-Request via API  \n${ArtiaComment}\nMais informações no GitHub: ${pull_request.html_url}`
    console.log('\n Content =>', content, '\n')
    createComment(
      organizationId,
      accountId,
      activityId,
      creatorEmail,
      creatorPassword,
      content
    )
  } catch (error) {
    if (error instanceof Error) {
      console.log('\n error.message =>', error.message, '\n')
      return
    }
    // if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
