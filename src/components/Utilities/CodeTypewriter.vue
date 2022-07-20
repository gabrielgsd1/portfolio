<script setup lang="ts">
  import { useTypewriter } from '../Composables/useTypewriter';

  const props = defineProps<{
    message: string
  }>()

  const text = useTypewriter(props.message);

</script>

<template>
  <div class="code-typewriter bg-[#161a1d] shadow-lg text-2xl box-border p-8 rounded-xl drop-shadow-lg font-normal lg:text-3xl">
    <code 
      v-for="word in text"
      :key="word.value"
      :style="{color: word.color}"
      class=""
    >
      {{word.value}}
    </code>
    <span id='bar'>|</span>
  </div>
</template>

<style scoped>
  #bar {
    animation: blink 1.25s infinite;
    pointer-events: none;
  }

  @keyframes blink {
    0%, 25% {
      opacity: 1
    }
    50%, 75% {
      opacity: 0;
    }
  }
  code{
    font-family: "Roboto Mono"
  }
</style>