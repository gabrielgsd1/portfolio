<script lang="ts" setup>
import { onMounted } from 'vue';


  onMounted(() => {
    console.log(document.querySelector('header')?.clientHeight)
    console.log(document.querySelector('header')?.offsetHeight)
    console.log(document.querySelector('header')?.scrollHeight)
  })
</script>

<template>
  <header class="sticky top-0 p-4 bg-gray-900 sm:p-0 z-[100] group">
    <div class="container text-gray-300 ">
      <div class="flex sm:hidden gap-1 flex-col duration-200 group-hover:rotate-90 p-2 w-fit">
        <div class="w-6 h-[0.125em] bg-gray-300"></div>
        <div class="w-6 h-[0.125em] bg-gray-300"></div>
        <div class="w-6 h-[0.125em] bg-gray-300"></div>
      </div> 
      <ul class="hidden bg-gray-900 sm:flex-row sm:flex absolute top-[100%] z-[100] right-0 left-0 flex-col w-full items-strech group-active:flex group-hover:flex hover:flex ">
        <li class="duration-200 w-full text-center hover:bg-black"><div class="p-2">Sobre mim</div></li>
        <li class="duration-200 w-full text-center hover:bg-black"><div class="p-2">Experiências</div></li>
        <li class="duration-200 w-full text-center hover:bg-black"><div class="p-2">Conhecimentos</div></li>
        <li class="duration-200 w-full text-center hover:bg-black"><div class="p-2">Idiomas</div></li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
  ul, li {
    list-style: 0;
    padding: 0;
    margin: 0;
  }
</style>