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
      <ul class="flex lg:justify-center lg:gap-16 flex-col lg:flex-row w-full text-center">
        <div class="py-4"><li @click="scrollToSection('about')" class="cursor-pointer header-item">Sobre mim</li></div>
        <div class="py-4"><li @click="scrollToSection('jobs')" class="cursor-pointer header-item">Experiências</li></div>
        <div class="py-4"><li @click="scrollToSection('knowledges')" class="cursor-pointer header-item">Conhecimentos</li></div>
        <div class="py-4"><li @click="scrollToSection('projects')" class="cursor-pointer header-item">Projetos</li></div>
        <div class="py-4"><li @click="scrollToSection('languages')" class="cursor-pointer header-item">Idiomas</li></div>
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

  .header-item {
    --endcolor: rgb(0, 78, 203);
    position: relative;
  }

  .header-item::after, .header-item::before {
    content: "";
    left: 0;
    position: absolute;
    width: 100%;
    height: 4px;
    transform: scaleX(0);
    transition: 200ms linear;
  }

  .header-item:hover::before, .header-item:hover::after {
    transform: scaleY(1)
  }

  .header-item::after {
    top: 105%;
    transform-origin: 0 0;
    background: var(--endcolor)

  }
  .header-item::before {
    bottom: 105%;
    transform-origin: 100% 100%;
    background: var(--endcolor)
  }
</style>