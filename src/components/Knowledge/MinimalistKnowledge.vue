<script setup lang="ts">
const props = defineProps<{
  name: string;
  imgLink: string;
  description: string;
  colors?: { from: string; to: string };
}>();
</script>

<template>
  <div class="minimalist-component relative group">
    <img :src="props.imgLink" class="w-20 h-20" />
    <div
      class="data duration-300 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 origin-bottom-left pointer-events-none group-hover:block absolute bottom-[102%] w-[250px] border-box p-4 rounded-lg"
      :style="{
        background: `linear-gradient(90deg, ${props.colors?.from}, ${props.colors?.to})`,
      }"
    >
      <div class="font-semibold text-xl">{{ props.name }}</div>
      <div class="">{{ props.description }}</div>
    </div>
  </div>
</template>

<style scoped></style>
