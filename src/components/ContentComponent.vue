<script lang="ts" setup>
  import JobsVue from "./Jobs/JobsVue.vue";
  import KnowledgeVue from "./Knowledge/KnowledgesVue.vue";
  import ProjectsVue from "./Projects/ProjectsVue.vue";
  import WelcomeVue from './Welcome/WelcomeVue.vue';
  import LanguagesVue from './Languages/LanguagesVue.vue'

</script>

<template>
  <div class="text-yellow-50 w-[90%] m-auto p-4">
    <WelcomeVue/>
    <section>
      <JobsVue/>
    </section>
    <section>
      <KnowledgeVue/>
    </section>
    <section>
      <ProjectsVue/>
    </section>
    <section>
      <LanguagesVue/>
    </section>
  </div>
</template>

<style>
  .hide{
    position: relative;
    transform: translateY(-15%);
    opacity: 0;
  }
  section{
    margin: 5rem 0;
  }
</style>
