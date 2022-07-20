<script setup lang="ts">
  import ProjectVue from './ProjectVue.vue';
import CodeTypewriter from '../Utilities/CodeTypewriter.vue';
</script>

<template>
  <CodeTypewriter message="Projetos"></CodeTypewriter>
  <div class="projects">
    <ProjectVue repo-link="https://github.com/gabrielgsd1/currency-app-v2-vue">
      <template v-slot:name>Currency App v2</template>
      <template v-slot:description>Este é meu projeto mais recente, feito em Typescript, Vue e Express. O projeto consiste na conversão de duas moedas, que é feita a partir da Currency Geo API. No front-end, utilizei o Vue Router para lidar com as rotas do site, e dividi os principais estados em Stores, para que sejam acessados com facilidade por qualquer componente. No back-end, utilizei o Express para lidar com os endpoints da API, e utilizei o módulo Bcrypt para realizar a criptografia das senhas de usuários cadastrados, e a tecnologia PrismaORM para conexão e realização de queries com o banco de dados. No banco de dados, foi utilizado o MongoDB, que me permite uma rápida e eficiente resposta em JSON.</template>
    </ProjectVue>
    <ProjectVue repo-link="https://github.com/gabrielgsd1/vue-to-do-list">
      <template v-slot:name>To-do App with Vue 3</template>
      <template v-slot:description>Novamente, utilizei o Vue para fazer esta to-do list. Utilizei as principais features do Vue, com transações, mudanças de estado constantes (editar to-do/to-do completa/ordenar e filtras to-dos). O programa salva no localStorage as to-dos que não foram deletadas, para que quando o usuário entre novamente, recupere dados de sua última sessão.</template>
    </ProjectVue>
    <ProjectVue repo-link="https://github.com/gabrielgsd1/currency-app">
      <template v-slot:name>Currency App</template>
      <template v-slot:description>Neste projeto, utilizei o React para fazer o front-end. Utilizei hooks, context api e o SCSS para estilizar o projeto. A aplicação consiste no consumo da API da CoinMarketCap, para fazer transações, tanto de criptomoedas quanto moedas. O backend é feito em Express e utiliza o banco de dados PostgreSQL, onde é possível guardar os dados de usuários cadastrados.</template>
    </ProjectVue>
  </div>
</template>
