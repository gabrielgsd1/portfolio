<script setup lang="ts">
  import JobVue from './JobVue.vue';
  import CodeTypewriter from '../Utilities/CodeTypewriter.vue';

  type Jobs = {
    name: string,
    company: string,
    description: string
  };

  const jobs:Jobs[] = [
    {
      name: "Estagiário em Projetos de TI (06/2021 - presente)",
      company: "Alfa Seguradora",
      description: "Atualmente trabalho como estagiário na Alfa Seguradora, faço parte da área de projetos, focado em banco de dados, utilizando o SQL Server como banco de dados. Faço scripts para serem utilizados por outros setores da seguradora,monitoro e detecto erros em cotações feitas pela plataforma de cálculos de seguro. Auxilio na criação e manutenção de stored procedures.Também ajudo nos testes de novas funcionalidades a serem implementadas, checando a inserção nas tabelas e utilizando o serviço SQL Server Profiler para detectar o caminho que a requisição percorreu."
    },
    {
      name: "Estagiário (10/2019 - 12/2020)",
      company: "Companhia de Saneamento Básico do Estado de São Paulo (Sabesp)",
      description: "Durante minha jornada na Sabesp, fui estagiário no setor financeiro, mais especificamente na área de transações. Notas fiscais e invoices, tanto de crédito quanto de débito, iam para este setor. Minha responsabilidade era de arquivar, escanear e criar planilhas com os dados que me eram dados, para melhor entendimento e organização dos documentos que chegavam."
    },
  ]
</script>

<template>
  <div class="jobsComponent">
    <CodeTypewriter message="Experiências"></CodeTypewriter>
    <JobVue v-for="job in jobs" :key="job.name">
      <template v-slot:jobTitle>{{job.name}}</template>
      <template v-slot:jobCompany>{{job.company}}</template>
      <template v-slot:jobDescription>{{job.description}}</template>
    </JobVue>
  </div>
</template>

