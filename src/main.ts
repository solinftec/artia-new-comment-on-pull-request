import * as core from '@actions/core'
import * as github from '@actions/github'

//Functions
import {createComment} from './createComment'

// Get the JSON webhook payload for the event that triggered the workflow//
const payload = JSON.stringify(github.context.payload, undefined, 2)
const objPayload = JSON.parse(payload)
const organizationId = parseInt(core.getInput('organizationId')) //OrganizationId é o id da empresa/organização cadastrada no artia. (informado no main.yml do workflow)
const accountId = parseInt(core.getInput('accountId')) //AccountId é o id do grupo de trabalho. (informado no main.yml do workflow)
const creatorEmail = core.getInput('creatorEmail') //Email criador do comentário (informado no main.yml do workflow).
const creatorPassword = core.getInput('creatorPassword') //Password (Váriavel de ambiente{sescrets.ARTIA_PASSWORD} informada no main.yml do workflow).
const pull_request = objPayload.pull_request
const activityId = pull_request.title.split('[').pop().split(']')[0]
const content = `Comentário criado por: ${pull_request.user.login} via API | Mais informações no GitHub: ${pull_request.url} \n${pull_request.body}`

async function run(): Promise<void> {
  try {
    createComment(
      organizationId,
      accountId,
      activityId,
      creatorEmail,
      creatorPassword,
      content
    )
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
