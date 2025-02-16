//  Variaveis gerais
const header = document.querySelector("header");
const fadeSections = document.querySelectorAll(".section--fade");

//  Animação revelando sections
function fadeIn(entries, obs) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hide--in"); //  remove efeito transparente
}

const fadeObserver = new IntersectionObserver(fadeIn, {
  root: null,
  threshold: 0.15, // 15% da tela
});

fadeSections.forEach((sec) => {
  sec.classList.add("hide--in");
  fadeObserver.observe(sec);
});
