import * as core from '@actions/core'
import * as github from '@actions/github'

//Functions
import {createComment} from './createComment'

// Get the JSON webhook payload for the event that triggered the workflow//
const payload = JSON.stringify(github.context.payload, undefined, 2)
const objPayload = JSON.parse(payload)
const organizationId = parseInt(core.getInput('organizationId')) //OrganizationId é o id da empresa/organização cadastrada no artia. (informado no main.yml do workflow)
const creatorEmail = core.getInput('creatorEmail') //Email criador do comentário (informado no main.yml do workflow).
const creatorPassword = core.getInput('creatorPassword') //Password (Váriavel de ambiente{sescrets.ARTIA_PASSWORD} informada no main.yml do workflow).
const pull_request = objPayload.pull_request
const ArtiaUrl = pull_request.body
  .split('**Link da tarefa no Artia:**')
  .pop()
  .split('**Inicio Comentário para o Artia**')[0]
const accountId = ArtiaUrl.split('/a/').pop().split('/f')[0]
// const folderId = ArtiaUrl.split('/f/').pop().split('/activities')[0]
const activityId = ArtiaUrl.split('/activities/')
  .pop()
  .split(ArtiaUrl.length)[0]

const content = `Comentário criado por: ${pull_request.user.login} a partir de um Pull-Request via API  \n${pull_request.body}\nMais informações no GitHub: ${pull_request.url}`

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
