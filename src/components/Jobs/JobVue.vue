<template>
  <div class="work gg-container" >
    <div class="py-4">
      <h3 class="font-extrabold tracking-tighter text-[#ccc] drop-shadow text-2xl"><slot name='jobTitle'/></h3>
      <h3 class="font-normal tracking-tighter text-[#ccc] drop-shadow text-xl"><slot name='jobCompany'/></h3>
    </div>
    <h4 class="font-thin text-xl"><slot name='jobDescription'/></h4>
  </div>
</template>