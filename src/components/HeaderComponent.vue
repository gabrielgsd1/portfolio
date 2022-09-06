<script lang="ts" setup>
  function scrollToSection(name:string){
    if(name === 'about') {
      document.querySelector('.welcome')?.scrollIntoView()
      return
    }
    document.querySelector(`section[name=${name}]`)?.scrollIntoView({
      behavior: 'smooth',
    })
  }
</script>

<template>
  <header class="text-[#ddd] bg-slate-900 sticky top-0 right-0 left-0 group z-[10]">
    <div class="stripes flex flex-col duration-[350ms] ease-in-out gap-1 p-4 w-fit group-hover:rotate-90 lg:hidden">
      <div class="bg-[#ccc] w-6 h-[0.15em] rounded-md"></div>
      <div class="bg-[#ccc] w-6 h-[0.15em] rounded-md"></div>
      <div class="bg-[#ccc] w-6 h-[0.15em] rounded-md"></div>
    </div>
    <div class="w-full hidden bg-slate-900 group-hover:block lg:block">
      <ul class="flex flex-col lg:flex-row w-full text-center">
        <li @click="() => scrollToSection('about')" class="flex-1"><div class="py-3 cursor-default hover:bg-gray-600">Sobre mim</div></li>
        <li @click="() => scrollToSection('jobs')" class="flex-1"><div class="py-3 cursor-default hover:bg-gray-600">Experiências</div></li>
        <li @click="() => scrollToSection('knowledges')" class="flex-1"><div class="py-3 cursor-default hover:bg-gray-600">Conhecimentos</div></li>
        <li @click="() => scrollToSection('projects')" class="flex-1"><div class="py-3 cursor-default hover:bg-gray-600">Projetos</div></li>
        <li @click="() => scrollToSection('languages')" class="flex-1"><div class="py-3 cursor-default hover:bg-gray-600">Idiomas</div></li>
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