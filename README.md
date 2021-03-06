# Integração Github - Artia 

### Esse repositório é uma Github Action e ela faz o seguinte:
> Quando um `Pull Request` for fechado, é criado um comentário em uma atividade do Artia.



## Como usar essa integração no seu repositório?

1. Abra o seu repositório no seu editor de código preferido.
2. Crie as seguintes pastas `.github/workflows/` na raiz do seu projeto.
> Essas pastas podem ser criadas em qualquer branch do seu repositório git.

> OBS: A pasta `workflows` precisa estar dentro da pasta `.github/`
3. Crie um arquivo `artia_comment_on_pr.yml` na pasta `.github/workflows/`.
4. Copie e cole o código abaixo no arquivo `artia_comment_on_pr.yml`.
```
on:
  pull_request:
    types: [closed]
    branches:
      - main
      - master
      - development
      - homologation
  
jobs:
  artia_comment_job:
    runs-on: ubuntu-latest
    name: Comment Activity.
    steps:
      - name: Comentando Atividade
        uses: solinftec/artia-new-comment-on-pull-request@main
        with: 
          organizationId: ${{ secrets.BOT_ARTIA_ORG_ID }}
          creatorEmail: ${{ secrets.BOT_ARTIA_EMAIL }}
          creatorPassword: ${{ secrets.BOT_ARTIA_PASSWORD }}
```

> Obs: Ao copiar e colar o código acima é importante que a indentação do código seja mantinda. 

> Link da documentação oficial do github actions, caso você queira editar em quais branches essa ação deve rodar.
> https://docs.github.com/pt/actions/learn-github-actions/events-that-trigger-workflows



## Quase lá! Agora vamos adicionar um template de `Pull Request` no seu repositório.
#### Importante: O arquivo de template de `Pull Request` precisa ser criado no default branch do seu repositório git, por exemplo: `(main ou master)`.


5. Crie um arquivo chamado `pull_request_template.md` na pasta `.github/` localizada na raiz do seu projeto.
> O arquivo de template fica na pasta `.github/` e não na pasta `.github/workflows`.

> O nome do arquivo precisa ser exatamente `pull_request_template.md`.

6. Copie e cole o texto abaixo no arquivo `.github/pull_request_template.md`.

```
Link da atividade no Artia:[Cole aqui o título da atividade](Cole aqui o link da atividade)

**Start Artia Comment**

Tudo o que você escrever aqui dentro, irá aparacer no comentário do artia.. Obs: Não insira código HTML/Markdown

**End Artia Comment**
```

## Pronto! Agora basta fazer o commit e o push dessas mudanças para o código no github.




### Agora vamos testar!

> Faça um merge de um Pull Request para o(s) branch(es) especificado(s) no workflow. Ao abrir esse Pull Request você verá o template `pull_request_template.md` aparecer. Siga as intruções que estão no template e faça o merge. Caso tudo esteja certo, um comentário será criado na atividade do Artia.

> OBS: O arquivo de template precisa fazer parte do seu `Default Branch(main/master)`.

### Exemplo de um `Pull Request` seguindo o template da nossa integração:

```
Link da atividade no Artia:[Integração Github Artia](https://app.artia.com/a/3757125/f/3757166/activities/19667956)

**Start Artia Comment**

Tudo o que você escrever aqui dentro, irá aparacer no comentário do artia.. Obs: Não insira código HTML/Markdown

**End Artia Comment**

O que você escrever aqui fora, não irá aparecer no artia.
```
Assista aqui nosso vídeo de demonstração!

> https://youtu.be/urOwdwa3YFw

:rocket: :rocket: :rocket:
