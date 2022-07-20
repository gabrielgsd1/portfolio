<script lang="ts" setup>
  const props = defineProps<{
    repoLink: string
  }>()
</script>

<template>
  <div class="project gg-container">
    <div class="project-header my-4">
      <h2 class="text-2xl"><slot name="name"/></h2>
      <a :href="props.repoLink" target="_blank">Acessar repositório</a>
    </div>
    <div class="project-body text-lg font-thin">
      <slot name="description"></slot>   
    </div>
  </div>
</template>