<script lang="ts" setup>
  import JobsVue from "./Jobs/JobsVue.vue";
  import KnowledgesVue from "./Knowledge/KnowledgesVue.vue";
  import ProjectsVue from "./Projects/ProjectsVue.vue";
  import WelcomeVue from './Welcome/WelcomeVue.vue';
  import LanguagesVue from './Languages/LanguagesVue.vue'
  import ContactVue from './Contact/ContactVue.vue'
</script>

<template>
  <div class="text-yellow-50 w-[90%] m-auto p-4">
    <section name="welcome">
      <WelcomeVue/>
    </section>
    <section name="jobs">
      <JobsVue/>
    </section>
    <section name="knowledges">
      <KnowledgesVue/>
    </section>
    <section name="projects">
      <ProjectsVue/>
    </section>
    <section name="languages">
      <LanguagesVue/>
    </section>
    <section name="contacts">
      <ContactVue/>
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
