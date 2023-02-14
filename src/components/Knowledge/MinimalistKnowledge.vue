<script setup lang="ts">
const props = defineProps<{
  name: string;
  imgLink: string;
  description: string;
  colors?: { from: string; to: string };
}>();
</script>

<template>
  <div class="minimalist-component relative group rounded-lg" :style="{
    background: `linear-gradient(90deg, ${props.colors?.from}, ${props.colors?.to})`,
  }">
    <img :src="props.imgLink" class="w-20 h-20 p-2" />
    <div class="data p-4">
      <div class="font-semibold text-xl">{{ props.name }}</div>
      <div class="">{{ props.description }}</div>
    </div>
  </div>
</template>
