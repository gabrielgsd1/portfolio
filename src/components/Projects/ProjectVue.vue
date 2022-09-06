<script lang="ts" setup>
  const props = defineProps<{
    repoLink: string,
    website?: string
  }>()
</script>

<template>
  <div class="project gg-container">
    <div class="project-header my-4">
      <h2 class="text-2xl"><slot name="name"/></h2>
      <div class="links">
        <a class="block w-fit hover:underline shadow-white" :href="props.repoLink" target="_blank">Acessar repositório</a>
        <a class="block w-fit hover:underline shadow-white" :href="props.website" v-if="props.website" target="_blank">Acessar Site</a>
      </div>
    </div>
    <div class="project-body text-lg font-thin">
      <slot name="description"></slot>   
    </div>
  </div>
</template>