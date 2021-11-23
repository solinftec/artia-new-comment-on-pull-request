# Integração Github - Artia 

### Esse repositório é uma Github Action e ela faz o seguinte:
> Quando acontecer o merge de um `Pull Request` é criado um comentário em uma atividade do Artia.



## Como usar essa integração no seu repositório?

1. Vá na aba `Actions` do seu repositório 
2. Aperte em `Set up a workflow yourself`. Ao apertar nesse botão o Github cria um arquivo `main.yml` na pasta `.github/workflows/`.
3. Mude o nome de `main.yml` para `artia-new-comment-on-pull-request.yml`.

Clique em `Use this Template` e crie um repositório. Esse repositório precisa ser público para que você possa compartilhar essa action com outros repositórios.

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
