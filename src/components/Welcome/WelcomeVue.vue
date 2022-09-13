<script lang="ts" setup>
  import AboutMe from '../AboutMe/AboutMe.vue';
  import CodeTypewriter from '../Utilities/CodeTypewriter.vue'

  const infos = ["Desenvolvedor Back-end", "Desenvolvedor Front-end", "Desenvolvedor Fullstack", "Analista de Banco de dados"]
</script>

<template>
  <div class="container flex flex-col gap-8 justify-center items-center">
    <!-- <CodeTypewriter message="Olá, seja bem-vind@ ao meu portfólio!"/>
    <AboutMe/> -->
    <div class="presentation">
      <p class="text-[50px] lg:text-[70px] font-light text-center bg-gradient-to-tr from-blue-500 to-purple-800 bg-clip-text text-transparent">Olá, bem vind@ ao meu portfólio!</p>
    </div>
    <div class="myself">
      <p class="text-center text-[25px] lg:text-[30px] font-extralight bg-gradient-to-tr text-[#ddd]">Me chamo Gabriel, tenho 19 anos e estou no 4° semestre de Análise e Desenvolvimento de Sistemas pela FMU. Que tal dar uma olhada em minhas experiências e habilidades?</p>
    </div>
  </div>
</template>

<style scoped>
</style>