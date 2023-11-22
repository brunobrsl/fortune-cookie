const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnImg = document.querySelector(".screen1 img")
const btnRetry = document.querySelector("button")

let phrases = [
  "A vida trará coisas boas se tiveres paciência.",
  "Não compense na ira o que lhe falta na razão.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "O bom-senso vai mais longe do que muito conhecimento.",
  "A adversidade é um espelho que reflete o verdadeiro eu.",
  "As pessoas se esquecerão do que você disse e do que você fez… mas nunca se esquecerão de como você as fez sentir.",
  "Você pode encontrar a si mesmo fazendo ou dizendo coisas que você nunca imaginou possíveis.",
  "Vencer é 90 por cento suor e 40 por cento técnica.",
  "O amor está mais próximo do que você imagina.",
  "Pare de procurar eternamente; a felicidade está bem ao seu lado.",
  "Conhecimento é a única virtude e ignorância é o único vício.",
  "O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.",
  "Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram trabalhando.",
  "O insucesso é apenas uma oportunidade para recomeçar de novo com mais inteligência.",
  "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.",
  "O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.",
  "Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.",
  "A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.",
  "A vida é para quem topa qualquer parada. Não para quem pára em qualquer topada.",
  "Motivação não é sinônimo de transformação, mas um passo em sua direção.",
  "O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.",
  "Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas habituais.",
  "Você sempre será a sua melhor companhia!",
  "Nada é por acaso…Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera..",
  "Quem quer colher rosas deve suportar os espinhos."
]


btnImg.addEventListener('click', handleImgClick)
btnRetry.addEventListener('click', handleRetryClick)

function handleImgClick() {
  toggleScreen()
  generatePhrases()
}

function handleRetryClick() {
  toggleScreen()
  randomPhrase = Math.round(Math.random() * 30)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function generatePhrases() {
  let randomPhrase = Math.round(Math.random() * 29)
  screen2.querySelector(".message p").innerText = phrases[randomPhrase]
}