<script setup lang="ts">
import JobVue from "./JobVue.vue";
import CodeTypewriter from "../Utilities/CodeTypewriter.vue";

type Jobs = {
  name: string;
  company: string;
  description: string;
};

const jobs: Jobs[] = [
  {
    name: "Freelance em Desenvolvimento Front-End",
    company: "SelfParking",
    description:
      "Fiquei responsável pela parte de pagamentos da empresa SelfParking, criando formulários e aplicando máscaras para padronização dos dados, geração de QRCodes e boletos, telas para cartão de crédito, além de validações para CPF/CNPJ, email e cartões. Foram usadas as seguintes tecnologias: React, Redux, React-Router e TailwindCSS.",
  },
  {
    name: "Estagiário em Projetos de TI (06/2021 - 12/2022)",
    company: "Alfa Seguradora",
    description:
      "Auxílio no desenvolvimento de atividades relacionadas à sustentação, designadas através de sprints semanais, com o objetivo de aprimorar a capacidade técnica na linguagem PL/SQL utilizando o banco de dados relacional SQL Server, obtendo visão de negócio da seguradora e interação com os usuários, trabalhando em ferramentas como Kitweb (sistemas de vendas de seguros para produtos), gerador de relatórios, WebServices de vendas, MVP de cartão de crédito, MVP do sistema integrado ao Serasa e SRO (Sistema de Registros de Operações), regulamentado pela SUSEP.",
  },
  {
    name: "Estagiário (10/2019 - 12/2020)",
    company: "Companhia de Saneamento Básico do Estado de São Paulo (Sabesp)",
    description:
      "Durante minha jornada na Sabesp, fui estagiário no setor financeiro, mais especificamente na área de transações. Notas fiscais e invoices, tanto de crédito quanto de débito, iam para este setor. Minha responsabilidade era de arquivar, escanear e criar planilhas com os dados que me eram dados, para melhor entendimento e organização dos documentos que chegavam.",
  },
];
</script>

<template>
  <div class="jobsComponent">
    <CodeTypewriter message="Experiências"></CodeTypewriter>
    <JobVue v-for="job in jobs" :key="job.name">
      <template v-slot:jobTitle>{{ job.name }}</template>
      <template v-slot:jobCompany>{{ job.company }}</template>
      <template v-slot:jobDescription>{{ job.description }}</template>
    </JobVue>
  </div>
</template>
