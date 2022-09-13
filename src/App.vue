<script setup lang="ts">
  import HeaderComponent from './components/HeaderComponent.vue';
  import ContentComponent from './components/ContentComponent.vue';
</script>

<template>
  <HeaderComponent/>
  <ContentComponent/>

</template>

<style>

  body, html{
    margin: 0;
    padding: 0;
  }
  body{
    background: linear-gradient(45deg, rgb(10,10,10), rgb(25, 0, 48), rgb(13, 5, 67));
    background-attachment: fixed;
  }
</style>
