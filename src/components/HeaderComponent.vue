<script lang="ts" setup>
  function scrollToSection(name:string){
    document.querySelector(`section[name=${name}]`)?.scrollIntoView({
      behavior: 'smooth',
    })
  }
</script>

<template>
  <header class="text-[#bbb] sticky top-0 right-0 left-0 group z-[10]">
    <div class="stripes flex flex-col duration-[350ms] ease-in-out gap-1 p-4 w-fit group-hover:rotate-90 lg:hidden">
      <div class="bg-[#ccc] w-6 h-[0.15em] rounded-md"></div>
      <div class="bg-[#ccc] w-6 h-[0.15em] rounded-md"></div>
      <div class="bg-[#ccc] w-6 h-[0.15em] rounded-md"></div>
    </div>
    <div class="header-div w-full hidden group-hover:block lg:block">
      <ul class="flex lg:justify-center lg:gap-16 flex-col lg:flex-row w-full text-center">
        <div class="py-4"><li @click="scrollToSection('welcome')" class="cursor-pointer header-item">Sobre mim</li></div>
        <div class="py-4"><li @click="scrollToSection('jobs')" class="cursor-pointer header-item">Experiências</li></div>
        <div class="py-4"><li @click="scrollToSection('knowledges')" class="cursor-pointer header-item">Conhecimentos</li></div>
        <div class="py-4"><li @click="scrollToSection('projects')" class="cursor-pointer header-item">Projetos</li></div>
        <div class="py-4"><li @click="scrollToSection('languages')" class="cursor-pointer header-item">Idiomas</li></div>
        <div class="py-4"><li @click="scrollToSection('contacts')" class="cursor-pointer header-item">Contato</li></div>
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

  header {
    background-color: rgba(0,0,0,0.6);
    backdrop-filter: blur(5px);
    box-shadow: 0 0 1rem black;
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