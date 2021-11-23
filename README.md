# Integração Github - Artia 

### Esse repositório é uma Github Action e ela faz o seguinte:
> Quando acontecer o merge de um `Pull Request` é criado um comentário em uma atividade do Artia.



## Como usar essa integração no seu repositório?

1. Vá na aba `Actions` do seu repositório.
2. Aperte em `Set up a workflow yourself`.
> Ao apertar nesse botão o Github cria um arquivo `main.yml` na pasta `.github/workflows/`.
3. Delete todo o código que já veio como template dentro do arquivo `main.yml`.
4. Copie e cole o código abaixo no arquivo `main.yml`.
```
on:
  pull_request:
    types: [closed]
    branches:
      - main
      - master
  
jobs:
  artia_comment_job:
    runs-on: ubuntu-latest
    name: Comment Activity.
    steps:
      - name: Comentando Atividade
        uses: solinftec/artia-new-comment-on-pull-request@v1.1.4
        with: 
          organizationId: ${{ secrets.BOT_ARTIA_ORG_ID }}
          creatorEmail: ${{ secrets.BOT_ARTIA_EMAIL }}
          creatorPassword: ${{ secrets.BOT_ARTIA_PASSWORD }}

```
> Obs: Ao copiar e colar o código acima é importante que a indentação do código seja mantinda. 

5. Mude o nome do arquivo de `main.yml` para `artia_comment_on_pr.yml`.



## Caso você queira personalizar a action escreva seu código dentro do arquivo Main.ts na pasta src (Crie novos arquivos se necessário, mas sempre os chame dentro do Main e crie eles dentro da pasta src)

> Para evitar problemas tenha a versão LTS mais recente do NodeJs instalada em conjunto com o npm.

Instalar as dependências

```bash
$ npm install
```

Build typescript and package it for distribution

```bash
$ npm run all
```


## Subindo para repositório para utilizar a Action

```bash
$ git add -A
$ git commit -m "My first action commit"
$ git tag -a -m "My first action release" v1.1
$ git push --follow-tags
```

:rocket: :rocket: :rocket:
