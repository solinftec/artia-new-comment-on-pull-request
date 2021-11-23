# Criar comentario por Pull Request

:rocket: :rocket: :rocket:

Esse repositório é uma Github Action e ela faz o seguinte:
> Ao fazer o merge de um Pull Request é criado um comentário na atividade do Artia.

Essa ação foi criada a partir do template: [Typescript-Action-Template](https://github.com/actions/typescript-action)

## Criar ação a partir deste template

Clique em `Use this Template` e crie um repositório. Esse repositório precisa ser público para que você possa compartilhar essa action com outros repositórios.

## Caso você queira personalizar a action escreva seu código dentro do arquivo Main.ts na pasta src (Crie novos arquivos se necessário, mas sempre os chame dentro do Main e crie eles dentro da pasta src)

> Para evitar probrelmas tenha a versão LTS mais recente do NodeJs instalada em conjunto com o npm.

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
