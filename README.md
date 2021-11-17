# Criar uma Action JavaScript utilizando TypeScript.

:rocket: :rocket: :rocket:

Se você não sabe o que está fazendo acesse o link: [Hello World JavaScript Action](https://github.com/actions/hello-world-javascript-action)

Essa ação foi criada a partir do template: [Typescript-Action-Template](https://github.com/actions/typescript-action)

## Criar ação a partir deste template

Clique em `Use this Template` e modifique com as informações para o seu repositório.

## Escreva seu código dentro do arquivo Main.ts na pasta src (Crie novos arquivos se necessário, mas sempre os chame dentro do Main e crie eles dentro da pasta src)

> Primeiramente tenha a versão mais recente do node instalada em conjunto com o npm.

Instalar as dependências

```bash
$ npm install
```

Build typescript and package it for distribution

```bash
$ npm run all
```

## Edite o action.yml

O action.yml define os inputs e outputs de sua Action.

documentação da sintaxe de um action.yml [documentation](https://help.github.com/en/articles/metadata-syntax-for-github-actions)

## Subindo para repositório para utilizar a Action

```bash
$ git add -A
$ git commit -m "My first action commit"
$ git tag -a -m "My first action release" v1.1
$ git push --follow-tags
```

:rocket: :rocket: :rocket:
