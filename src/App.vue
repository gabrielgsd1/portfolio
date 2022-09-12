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
    background: linear-gradient(45deg, rgb(10,10,10), rgb(18, 0, 34), rgb(7, 3, 39));
    background-attachment: fixed;
  }
</style>
