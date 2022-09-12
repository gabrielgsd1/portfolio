<script setup lang="ts">
  const props = defineProps<{
    imgLink: string,
    colors?: {from: string, to: string}
  }>()

</script>

<template>
  <div 
    :class="'transition-all duration-300 flex py-8 px-4 relative box-border gap-8 rounded-xl bg-gradient-to-r'"
    :style="{background: `linear-gradient(90deg, ${props.colors?.from}, ${props.colors?.to})`}"
  >
    <img loading="lazy" :src="imgLink" alt="img" class=" w-[100px] h-[100px] self-center lg:w-24]" >
    <div class="flex flex-col">
      <div class="text-2xl font-[700] drop-shadow-md text-[#ddd] tracking-tighter"><slot name='name'/></div>
      <div class="font-light"><slot name='description'/></div>
    </div>
  </div>
</template>