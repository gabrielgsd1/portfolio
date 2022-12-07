import { ref, computed } from "vue";

export function useTypewriter(text: string) {
  const currentText = ref("");

  const colors = [
    "#1F7A8C",
    "#5E7CE2",
    "#00AF54",
    "#007CBE",
    "#ddd",
    "#957fef",
    "#ee4266",
    "#119da4",
    "#ff4a1c",
    "#6f2dbd",
    "#f3722c",
    "#e63946",
    "#0077b6",
    "#8ac926",
    "#faa916",
    "#3a7ca5",
  ];

  function typewriterText(value: string, position = 0) {
    setTimeout(() => {
      currentText.value += value.charAt(position); //adiciona uma letra a cada x milissegundos
      if (position < value.length - 1) typewriterText(value, position + 1); //recursão caso posição < value.length
    }, randomPeriod());
  }

  function randomPeriod() {
    const timings = [80, 100, 120];
    return timings[Math.floor(Math.random() * timings.length)];
  }

  function shuffleColors() {
    colors.sort(() => {
      const num = Math.random();
      if (num > 0.5) return 1;
      return -1;
    });
  }

  currentText.value = "";
  text += " ()";
  typewriterText(text);
  shuffleColors();
  const spaceSplittedText = computed(() => {
    const words = currentText.value.split(" "); //separa texto em palavras
    const last = [...words].pop(); //pega a última palavra
    const data = words.map((word, i) => {
      return {
        value:
          word == last || text.endsWith(word + " ()")
            ? word.trim()
            : word + " ",
        color: colors[i % colors.length],
      };
    });
    return data;
  });
  return spaceSplittedText;
}
