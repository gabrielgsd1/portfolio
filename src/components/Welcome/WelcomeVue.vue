<script lang="ts" setup>
import { onMounted, ref, type Ref } from "vue";

const welcome: Ref<HTMLElement | null> = ref(null);
const presentation: Ref<HTMLElement | null> = ref(null);

onMounted(() => {
  const duration = 1400;

  if (welcome.value && presentation.value) {
    welcome.value.classList.add("animate");
    presentation.value.classList.add("animate");

    welcome.value.style.animationDuration = `${duration}ms`;
    presentation.value.style.animationDuration = `${duration * 2}ms`;
  }
});
</script>

<template>
  <div class="container flex flex-col gap-8 justify-center items-center">
    <div class="presentation">
      <p
        ref="welcome"
        class="text-[50px] lg:text-[70px] font-semibold text-center bg-gradient-to-tr from-blue-500 to-purple-800 bg-clip-text text-transparent"
      >
        Olá, bem vind@ ao meu portfólio!
      </p>
    </div>
    <div class="myself">
      <p
        ref="presentation"
        class="text-center text-[25px] lg:text-[30px] font-extralight bg-gradient-to-tr text-[#ddd]"
      >
        Me chamo Gabriel, tenho 20 anos e sou formado em Análise e
        Desenvolvimento de Sistemas pela FMU. Sou um desenvolvedor com 3 anos de experiência, atualmente atuo como Desenvolvedor Full Stack Pleno. Expertise em construção e manutenção de aplicações web sólidas.
      </p>
    </div>
  </div>
</template>

<style scoped>
.animate {
  animation-name: showUp;
  animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

@keyframes showUp {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
