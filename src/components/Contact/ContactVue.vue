<script setup lang="ts">
import CodeTypewriter from '../Utilities/CodeTypewriter.vue';

type Contacts = {
  name: string,
  img: string,
  href?: string
}

const contacts:Contacts[] = [{
  img: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  name: "LinkedIn - Gabriel Gomes",
  href: "https://www.linkedin.com/in/gabriel-gomes-6410a31bb/"
}, {
  name: "GitHub - gabrielgsd1",
  img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  href: "https://github.com/gabrielgsd1"
},
{
  name: "gabrielgsd03@gmail.com",  
  img: "https://i0.wp.com/multarte.com.br/wp-content/uploads/2020/05/email5.png?fit=696%2C696&ssl=1",
  href: "mailto:gabrielgsd03@gmail.com"
}, {
  name: "(11) 94403-6089",
  img: "http://cdn.onlinewebfonts.com/svg/img_488164.png"
}
]
</script> 

<template>
  <CodeTypewriter message="Contatos"/>
  <div class="items border-box py-8">
    <a 
      v-for="item in contacts"
      :href="item.href" 
      class="item text-md lg:text-xl flex gap-4 items-center"
      :key="item.name"
      >
      <img :src="item.img" class="w-8 h-8 grayscale-[100%] brightness-[10%]"/>
      <p class="inline">{{item.name}}</p>
    </a>
  </div>
</template> 
 
<style scoped>
  .item {
    position: relative;
    cursor: pointer;
    width: fit-content;
    margin-bottom: 0.5rem;
    padding: 0.25rem 0.75rem;
    transition: 300ms;
    color: black;
    filter: invert(100%);
    letter-spacing: 0.05em;
  }
  .item:hover {
    filter: invert(0);
    letter-spacing: 0.1em;
    outline: 0.2rem solid black;
  }
  .item:hover::before {
    filter: invert(100%);
    transform: scaleX(1);
  }
  .item::before{
    content: "";
    transition: 300ms;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #222;
    transform: scaleX(0);
    transform-origin: 0 0;
    z-index: -1;
  }

</style> 
