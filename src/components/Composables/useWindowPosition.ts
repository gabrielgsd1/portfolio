import { ref } from "vue";

export function useWindowPosition(){
  const x = ref(0)  
  const y = ref(0)    
  document.addEventListener('pointermove', (e) => {
    x.value = e.pageX
    y.value = e.pageY
  })
  return {x: x, y: y}
}