<script setup lang="ts">
import ProjectVue from "./ProjectVue.vue";
import CodeTypewriter from "../Utilities/CodeTypewriter.vue";

interface Project {
  name: string;
  description: string;
  repolink: string;
  website?: string;
}

const projects: Project[] = [];
</script>

<template>
  <CodeTypewriter message="Projetos" />
  <div class="projects">
    <ProjectVue
      v-for="project in projects"
      :repo-link="project.repolink"
      :key="project.repolink"
      :website="project.website"
    >
      <template v-slot:name>{{ project.name }}</template>
      <template v-slot:description>{{ project.description }}</template>
    </ProjectVue>
  </div>
</template>
