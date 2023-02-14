<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";

function scrollToSection(name: string) {
  document.querySelector(`section[name=${name}]`)?.scrollIntoView({
    behavior: "smooth",
  });
}

const showMenu = ref(false);

const headerRef = ref<HTMLHeadingElement>()

const toggleMenu = computed(() => {
  return showMenu.value ? "rotate-90" : "rotate-0";
});

const toggleOptions = computed(() => {
  return showMenu.value ? 'block' : 'hidden'
})

function handleClick(e: MouseEvent) {
  e.stopPropagation()
  showMenu.value = !showMenu.value;
}

onMounted(() => {
  document.body.addEventListener("click", e => {
    showMenu.value = false
  })
})
</script>

<template>
  <header ref="headerRef" class="text-[#bbb] fixed top-0 right-0 left-0 group z-[10]">
    <div class="header-container" @click="handleClick" id="header">
      <div :class="toggleMenu + ' lg:hidden duration-200 flex w-fit flex-col gap-1 p-5'">
        <div class="bg-[#ccc] w-6 h-[0.15em] rounded-md"></div>
        <div class="bg-[#ccc] w-6 h-[0.15em] rounded-md"></div>
        <div class="bg-[#ccc] w-6 h-[0.15em] rounded-md"></div>
      </div>
    </div>
    <div :class="'header-div w-full ' + toggleOptions + ' lg:block'">
      <ul class="flex lg:justify-center lg:gap-16 flex-col items-center lg:flex-row w-full text-center">
        <div class="py-4">
          <li @click="scrollToSection('welcome')" class="cursor-pointer header-item">
            Sobre mim
          </li>
        </div>
        <div class="py-4">
          <li @click="scrollToSection('jobs')" class="cursor-pointer header-item">
            Experiências
          </li>
        </div>
        <div class="py-4">
          <li @click="scrollToSection('knowledges')" class="cursor-pointer header-item">
            Conhecimentos
          </li>
        </div>
        <div class="py-4">
          <li @click="scrollToSection('languages')" class="cursor-pointer header-item">
            Idiomas
          </li>
        </div>
        <div class="py-4">
          <li @click="scrollToSection('contacts')" class="cursor-pointer header-item">
            Contato
          </li>
        </div>
      </ul>
    </div>
  </header>
</template>

<style scoped>
ul,
li {
  list-style: 0;
  padding: 0;
  margin: 0;
}

header {
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 1rem black;
}

.header-item {
  --endcolor: rgb(0, 78, 203);
  position: relative;
}

.header-item::after,
.header-item::before {
  content: "";
  left: 0;
  position: absolute;
  width: 100%;
  height: 4px;
  transform: scaleX(0);
  transition: 200ms linear;
}

.header-item:hover::before,
.header-item:hover::after {
  transform: scaleY(1);
}

.header-item::after {
  top: 105%;
  transform-origin: 0 0;
  background: var(--endcolor);
}

.header-item::before {
  bottom: 105%;
  transform-origin: 100% 100%;
  background: var(--endcolor);
}
</style>
