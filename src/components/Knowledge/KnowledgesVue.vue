<script setup lang="ts">
import KnowledgeVue from "./KnowledgeVue.vue";
import CodeTypewriter from "../Utilities/CodeTypewriter.vue";

type Colors = {
  from: string,
  to: string
}

type KnowledgeProps = {
  imgLink: string,
  name: string,
  description: string,
  colors: Colors
}

type Knowledges = {
  frontend: KnowledgeProps[],
  backend: KnowledgeProps[],
  databases: KnowledgeProps[]
}

const knowledges:Knowledges = { 
  frontend: [
    {
    imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png",
    name: "HTML5",
    description: "Conhecimento de diversas tags, semânticas e noções de responsividade.",
    colors: {
      from: "#ed758b",
      to: "#ef6c5f"
    }
    },
    {
    imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png",
    name: "CSS",
    description: "Assim como o HTML, saber CSS é essencial. Possuo noções de Flexbox, Grid, transições, animações e design responsivo.",
    colors: {
      from: "rgb(30,70,150)",
      to: "rgb(20,20,90)"
    } 
    },
    {
    imgLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png',
    name: 'Vue',
    description: 'É a tecnologia mais recente que continuo aprendendo. Já vi tópicos como Single File Components, Provide/Inject, Watchers, Slots, Refs, Computed, Transitions e TransitionGroup, Vue Router, Composables, Stores e Emits.',
    colors: {
      from: 'rgb(0,130,0)',
      to: 'rgb(0,40,0)'
    }
    },
    {
    imgLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    name: 'React',
    description: 'High Order Components, Hooks (como useState, useEffect, useRef, useMemo e useCallback), ContextAPI, React Router e Redux.',
    colors: {
      from: 'rgb(0,130,200)',
      to: 'rgb(0,10,100)'
    }
    },
    {
    imgLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png',
    name: 'Sass',
    description: 'At-rules (como @mixin, @function e @include).',
    colors: {
      from: '#99228d',
      to: '#CF76A6'
    }
    },
  ],
  backend: [
    {
      name: 'NodeJS',
      description: "Event loop, callbacks, promises, async/await e métodos HTTP.",
      imgLink: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      colors: {
        from: "black",
        to: "green"
      }
    },
    {
      name: 'Express',
      description: "Requests, responses, middleware, CORS e conexão com banco de dados.",
      imgLink: 'https://iconape.com/wp-content/files/ep/370863/svg/370863.svg',
      colors: {
        from: '#999',
        to: 'black'
      }
    },
    {
      name: "Prisma",
      description: "Prisma Schemas, Prisma Client e operações CRUD.",
      imgLink: "https://www.svgrepo.com/show/354210/prisma.svg",
      colors: {
        from: 'rgb(45,45,120)',
        to: 'black'
      }
    }
  ],
  databases: [
    {
      imgLink: "https://hackr.io/tutorials/learn-sql-server/logo/logo-sql-server?ver=1557508629",
      name: "SQL",
      description: "Cláusulas de seleção, atualização, inserção, deleção, Stored Procedures, Triggers, joins e aggregate functions.",
      colors: {
        from: "#aaa",
        to: "#880000"
      }
    },
    {
      imgLink: "https://www.svgrepo.com/show/303232/mongodb-logo.svg",
      name: "MongoDB",
      description: "Schemas, collections, databases e replica set.",
      colors: {
        from: '#235601',
        to: '#543105'
      } 
    }
  ]
}

</script>

<template>
  <div class="knowledgeComponent flex flex-col gap-12">
    <CodeTypewriter message="Conhecimentos"></CodeTypewriter>
    <div class="knowledge-container">
      <h2 class="text-2xl font-thin my-4">Front-end</h2>
      <div class="knowledge front-end grid w-full gap-4 lg:grid-cols-2">
        <KnowledgeVue 
          v-for="item in knowledges.frontend" 
          :key="item.name"
          :img-link="item.imgLink"
          :colors="item.colors"
        >
          <template v-slot:name>{{item.name}}</template>
          <template v-slot:description>{{item.description}}</template>
        </KnowledgeVue>
      </div>
    </div>
    <div class="knowledge-container">
      <h2 class="text-2xl font-thin my-4">Back-end</h2>
      <div class="knowledge back-end grid w-full gap-4 lg:grid-cols-2">
        <KnowledgeVue 
          v-for="item in knowledges.backend" 
          :key="item.name"
          :img-link="item.imgLink"
          :colors="item.colors"
        >
          <template v-slot:name>{{item.name}}</template>
          <template v-slot:description>{{item.description}}</template>
        </KnowledgeVue>
      </div> 
    </div>
    <div class="knowledge-container">
      <h2 class="text-2xl font-thin my-4">Banco de dados</h2>
      <div class="knowledge databases grid w-full gap-4 lg:grid-cols-2">
        <KnowledgeVue 
          v-for="item in knowledges.databases" 
          :key="item.name"
          :img-link="item.imgLink"
          :colors="item.colors"
        >
          <template v-slot:name>{{item.name}}</template>
          <template v-slot:description>{{item.description}}</template>
        </KnowledgeVue>
      </div> 
    </div>
  </div>

</template>
