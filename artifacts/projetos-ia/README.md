# Projetos do Curso de IA

Hub de links no estilo Linktree para reunir todos os projetos criados durante o curso de IA.

---

## Como editar os projetos

Abra o arquivo `script.js` e localize o array `projects` no início do arquivo.

Cada projeto é um objeto com quatro campos:

```js
{
  title: "Nome do Projeto",
  description: "Descrição curta do que o projeto faz.",
  url: "https://link-do-seu-projeto.com",
  icon: "🔗"
}
```

Para **adicionar** um projeto, copie um bloco acima, cole dentro do array e preencha os campos.  
Para **remover**, apague o objeto correspondente.  
Para **reordenar**, corte e cole os objetos na ordem desejada.

---

## Como subir no GitHub

1. Crie um repositório no [github.com](https://github.com) (pode ser público).
2. No seu terminal, dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

---

## Como publicar no Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub.
2. Clique em **"Add New → Project"**.
3. Selecione o repositório que você subiu.
4. Na tela de configuração, deixe tudo como está (o Vercel detecta automaticamente que é um site estático).
5. Clique em **"Deploy"**.

Pronto — em alguns segundos o site estará no ar com uma URL pública.


deu erro ainda 

---

## Estrutura dos arquivos

```
index.html   → estrutura da página
style.css    → estilos e visual
script.js    → lista de projetos e renderização dos cards
README.md    → este arquivo
```
