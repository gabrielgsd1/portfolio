<script setup lang="ts">
  import ProjectVue from './ProjectVue.vue';
  import CodeTypewriter from '../Utilities/CodeTypewriter.vue';

  interface Project {
    name: string,
    description: string,
    repolink: string,
    website?: string
  }

  const projects: Project[] = [
    {
      website: "https://famous-pixie-9f3f47.netlify.app",
      repolink: "gabrielgsd1/spotify-api-project",
      name: "Spotify API Project (Em desenvolvimento)",
      description: "Esta aplicação segue em desenvolvimento e utiliza a API do Spotify para realizar a busca de artistas, músicas e álbuns, há como procurar, assim como ver detalhes aprofundados de cada item, graças ao React Router. Foram usadas as seguintes tecnologias: React, Redux, React Router e TailwindCSS.",
    },
    {
      website: "https://jazzy-quokka-d0f2a1.netlify.app",
      repolink: "https://github.com/gabrielgsd1/currency-app-v2-vue",
      name: "Currency App v2",
      description: "Este é um projeto meu feito em Typescript, Vue e Express. O projeto consiste na conversão de duas moedas, que é feita a partir da Currency Geo API. No front-end, utilizei o Vue Router para lidar com as rotas do site, e dividi os principais estados em Stores, para que sejam acessados com facilidade por qualquer componente. No back-end, utilizei o Express para lidar com os endpoints da API, e utilizei o módulo Bcrypt para realizar a criptografia das senhas de usuários cadastrados, e a tecnologia PrismaORM para conexão e realização de queries com o banco de dados. No banco de dados, foi utilizado o MongoDB, que me permite uma rápida e eficiente resposta em JSON.",
    },
    {
      repolink: "https://github.com/gabrielgsd1/vue-to-do-list",
      name: "To-do App with Vue 3",
      description: "Novamente, utilizei o Vue para fazer esta to-do list. Utilizei as principais features do Vue, com transações, mudanças de estado constantes (editar to-do/to-do completa/ordenar e filtras to-dos). O programa salva no localStorage as to-dos que não foram deletadas, para que quando o usuário entre novamente, recupere dados de sua última sessão."
    },
    {
      repolink: "https://github.com/gabrielgsd1/currency-app",
      name: "Currency App",
      description: "Neste projeto, utilizei o React para fazer o front-end. Utilizei hooks, context api e o SCSS para estilizar o projeto. A aplicação consiste no consumo da API da CoinMarketCap, para fazer transações, tanto de criptomoedas quanto moedas. O backend é feito em Express e utiliza o banco de dados PostgreSQL, onde é possível guardar os dados de usuários cadastrados."
    }
  ]
</script>

<template>
  <CodeTypewriter message="Projetos"/>
  <div class="projects">
    <ProjectVue 
      v-for="project in projects" 
      :repo-link="project.repolink"
      :key="project.repolink"
      :website="project.website"
    >
      <template v-slot:name>{{project.name}}</template>
      <template v-slot:description>{{project.description}}</template>
    </ProjectVue>
  </div>
</template>
