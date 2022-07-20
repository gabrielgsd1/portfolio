<script setup lang="ts">
import CodeTypewriter from "../Utilities/CodeTypewriter.vue";

</script>

<template>
  <div class="container">
    <CodeTypewriter message="Idiomas"/>
    <div class="languages">
      <div class="language gg-container">
        <div class="language-header flex flex-col md:flex-row gap-4 items-center my-8">
          <h1 class="text-2xl font-extrabold text-[#ddd] drop-shadow">Inglês</h1>
          <img class="w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Cambridge_University_Crest_-_flat.png/477px-Cambridge_University_Crest_-_flat.png"/>
        </div>
        <div class="language-body font-extralight">
          <h2>Possuo inglês fluente, com certificação da Cambridge University, no qual possuo o certificado do exame FCE (First Certificate in English), que equivale a um nível B2 de inglês, onde alcancei a pontuação de 170 de 180 pontos possíveis.</h2>
        </div>
      </div>
      <div class="language gg-container">
        <div class="language-header flex flex-col md:flex-row gap-4 items-center my-8">
          <h1 class="text-2xl font-extrabold text-[#ddd] drop-shadow">Espanhol</h1>
          <img class="w-24 grayscale" src="https://siele.org/siele-theme/images/custom/logo_siele.png"/>
        </div>
        <div class="language-body font-extralight">
          <h2>Espanhol intermediário, atualmente estou estudando no Cultural Norte Americano (CNA), onde pretendo realizar o exame de proeficiência da língua espanhola, feito pelo Servicio Internacional de Evaluación de la Lengua Española (SIELE), que oferece a possibilidade de um certificado de nível B2.</h2>
        </div>
      </div>
    </div>
  </div>
</template>