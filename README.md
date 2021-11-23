# Integração Github - Artia 

### Esse repositório é uma Github Action e ela faz o seguinte:
> Quando acontecer o merge de um `Pull Request` é criado um comentário em uma atividade do Artia.



## Como usar essa integração no seu repositório?

1. Abra seu repositório no Github e vá na aba `Actions`.
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
6. Aperte no botão `Start commit` e depois no botão `Commit new file`.

## Quase lá! Agora vamos adicionar um template de `Pull Request` no seu repositório.
> É essencial que o template seja usado para a integração funcionar.

7. Crie um arquivo `pull_request_template.md` na pasta `.github/` localizada na raiz do seu repositório.
8. Copie e cole o texto abaixo no arquivo `.github/pull_request_template.md`.

```
Link da atividade no Artia:[Cole aqui o título da atividade](Cole aqui o link da atividade)

**Start Artia Comment**
> Escreva aqui o comentário que será enviado para o Artia. Obs: Não insira código HTML/Markdown

**End Artia Comment**
```

## Pronto! Agora vamos testar se funciona.
> Faça um merge de um Pull Request para o seu branch principal (Master ou Main). Ao abrir esse Pull Request você já verá o template `pull_request_template.md` aparecer. Siga as intruções que estão no template e faça o merge. Caso tudo esteja certinho, um comentário será criado na atividade do Artia.

> Abaixo um exemplo de um `Pull Request` seguindo o template da nossa integração:

```md
Link da atividade no Artia:[Cole aqui o título da atividade](Cole aqui o link da atividade)

**Start Artia Comment**
> Escreva aqui o comentário que será enviado para o Artia. Obs: Não insira código HTML/Markdown

**End Artia Comment**
```







### Caso você queira personalizar a action escreva seu código dentro do arquivo Main.ts na pasta src (Crie novos arquivos se necessário, mas sempre os chame dentro do Main e crie eles dentro da pasta src)

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
