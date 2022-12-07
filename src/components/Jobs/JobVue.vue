<template>
  <div class="work px-4 mb-4 lg:mb-6">
    <div class="py-4">
      <h3
        class="font-extrabold tracking-tight text-[#ddd] w-fit pr-2 drop-shadow text-2xl"
      >
        <slot name="jobTitle" />
      </h3>
      <h3 class="font-normal tracking-tight text-[#ccc] drop-shadow text-xl">
        <slot name="jobCompany" />
      </h3>
    </div>
    <h4 class="font-thin text-xl"><slot name="jobDescription" /></h4>
  </div>
</template>
