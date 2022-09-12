<script setup lang="ts">
import CodeTypewriter from "../Utilities/CodeTypewriter.vue";
import MinimalistKnowledge from "./MinimalistKnowledge.vue";
import { ref, computed } from "vue";
import KnowledgeVue from "./KnowledgeVue.vue";

const minimalistOption = ref(false)

const stylingOptions = computed(() => {
  if(minimalistOption.value) return "bg-gradient-to-r from-purple-800 via-fuchsia-700 to-fuchsia-900"
  else return "bg-gray-800"
})

const containterStyleOptions = computed(() => {
  if(minimalistOption.value) return "knowledge flex flex-wrap gap-8"
  return "knowledge grid w-full gap-4 lg:grid-cols-2"
})

function switchOption() {
  minimalistOption.value = !minimalistOption.value
}

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
  languages: KnowledgeProps[],
  frontend: KnowledgeProps[],
  backend: KnowledgeProps[],
  databases: KnowledgeProps[],
  others?: KnowledgeProps[]
}

const descriptions = {
  languages: "Linguagens",
  frontend: "Front-end",
  backend: "Back-end",
  databases: "Banco de Dados",
  others: "Outros",
}

const knowledges:Knowledges = { 
  languages: [
    {
      imgLink: "https://logospng.org/download/javascript/logo-javascript-1024.png",
      name: "Javascript",
      description: "Conhecimento considerável da linguagem, utilizando-a com frameworks tanto de front-end quanto de back-end.",
      colors: {
        from: "#aa5500",
        to: "#cc7700"
      }
    },
    {
      imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
      name: "Typescript",
      description: "Conhecimento considerável da linguagem, utilizando-a com frameworks tanto de front-end quanto de back-end (incluindo tipagem).",
      colors: {
        from: "#0033CD",
        to: "#0077ab"
      }
    },
    {
      imgLink: "https://storage.googleapis.com/hcode.com.br/courses/65/logo_svg5fd776bc276da.svg",
      name: "C#",
      description: "Conhecimento intermediário da linguagem e na plataforma .Net Core.",
      colors: {
        from: "#7100D3",
        to: "#4000D3"
      }
    },
  ],
  frontend: [
    {
    imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png",
    name: "HTML5",
    description: "Conhecimento de diversas tags, semânticas e noções de responsividade.",
    colors: {
      from: "#FF8C00",
      to: "#FF4500",
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
    description: 'Single File Components, Provide/Inject, Watchers, Slots, Refs, Computed, Transitions e TransitionGroup, Vue Router, Composables, Stores e Emits.',
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
      name: 'Nest',
      description: "Pipes, Guards, Decorators, Controllers, Middleware, Modules, Services, CORS e conexão com banco de dados.",
      imgLink: 'https://seeklogo.com/images/N/nestjs-logo-09342F76C0-seeklogo.com.png',
      colors: {
        from: '#960202',
        to: '#aaa'
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
    },
    {
      name: ".Net Core",
      description: "Utilização do ASP.NET Core Web API para criação de APIs utilizando a plataforma .Net Core.",
      imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png",
      colors: {
        from: "purple",
        to: "#4000D3"
      }
    },
    {
      imgLink: "https://plugins.jetbrains.com/files/18147/209295/icon/pluginIcon.svg",
      name: "Entity Framework Core",
      description: "Conexão com o banco de dados, operaçoes CRUD, Migrations, Data Annotations, Fluent API, e Conventions.",
      colors: {
        from: "purple",
        to: "#4000ff"
      }
    }
  ],
  databases: [
    {
      imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png",
      name: "SQL",
      description: "Cláusulas de seleção, atualização, inserção, deleção, Stored Procedures, Triggers, joins e aggregate functions.",
      colors: {
        from: "#0012cc",
        to: "#866"
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
    }, 
    {
      imgLink: "https://plugins.jetbrains.com/files/12820/149292/icon/pluginIcon.svg",
      name: "Redis",
      description: "Caching.",
      colors: {
        from: "#aa0000",
        to: "#330000"
      }
    }
  ],
  others: [
    {
      name: 'Docker',
      imgLink: "https://seeklogo.com/images/D/docker-logo-CF97D0124B-seeklogo.com.png",
      description: 'Images e Containers.',
      colors: {
        from: '#0953A2',
        to: '#A4C7bb'
      }
    },
    {
      name: 'Git',
      imgLink: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      description: 'Comandos para versionamento de código.',
      colors: {
        from: '#FF8585',
        to: '#FF6054'
      }
    }
  ]
}

</script>

<template>
  <div class="knowledgeComponent flex flex-col gap-12">
    <CodeTypewriter message="Conhecimentos"/>
    <div class="simple font-bold text-2xl">
      <p class="mr-4 h-auto inline bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500">Modo minimalista</p>
      <button @click="switchOption" :class="`button p-2 rounded-3xl w-[5rem] ` + stylingOptions">
        <div 
          class="circle duration-200 rounded-[50%] bg-white w-6 h-6"
          :style="{transform: minimalistOption ? 'translateX(175%)' : 'translateX(0)'}"
        />
      </button>
    </div>
    <div 
      class="knowledge-container" 
      v-for="(value, key) in knowledges"
      :key="value?.toString()"
    >
      <h2 class="text-2xl font-thin my-4">{{descriptions[key]}}</h2>
        <div :class="containterStyleOptions">
          <template v-if="minimalistOption">
            <MinimalistKnowledge 
              v-for="knowledge in value"
              :colors="knowledge.colors"
              :name="knowledge.name"
              :imgLink="knowledge.imgLink"
              :description="knowledge.description"
              :key="knowledge.name"
            />
          </template>
          <template v-else>
            <KnowledgeVue 
              v-for="item in value" 
              :key="item.name"
              :name="item.name"
              :img-link="item.imgLink"
              :colors="item.colors"
            >
              <template v-slot:name>{{item.name}}</template>
              <template v-slot:description>{{item.description}}</template>
            </KnowledgeVue>
          </template>
        </div>
    </div>
  </div>
</template>

