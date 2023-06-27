const container = document.querySelector('div')
const img = document.querySelector('img')
const aberto = document.getElementById('aberto')

const btn = document.querySelector('button')

const frasesMotivacionais = [
  "Acredite em si mesmo e tudo será possível.",
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Se você quer ser bem-sucedido, precisa ter dedicação total, buscar seu último limite e dar o melhor de si mesmo.",
  "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.",
  "A persistência é o caminho do êxito.",
  "Não tenha medo de desistir do bom para perseguir o ótimo.",
  "Não é o mais forte que sobrevive, nem o mais inteligente, mas o que melhor se adapta às mudanças.",
  "O sucesso é ir de fracasso em fracasso sem perder entusiasmo.",
  "O único modo de fazer um excelente trabalho é amar o que você faz.",
  "Grandes mentes discutem ideias; mentes medianas discutem eventos; mentes pequenas discutem pessoas.",
  "O sucesso normalmente vem para quem está ocupado demais para procurar por ele.",
  "A melhor vingança é um sucesso estrondoso.",
  "O maior prazer da vida é fazer aquilo que as pessoas dizem que você não é capaz.",
  "Para de perseguir o dinheiro e comece a perseguir o sucesso.",
  "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
  "O que nos parece uma provação amarga pode ser uma bênção disfarçada.",
  "Nada é impossível, a palavra em si diz 'eu sou possível'.",
  "Acredite em seus sonhos e eles podem se tornar realidade.",
  "O sucesso é a soma de pequenos esforços repetidos diariamente.",
  "O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.",
  "Se você não está disposto a arriscar, esteja disposto a uma vida comum.",
  "O sucesso é a capacidade de ir de fracasso em fracasso sem perder o entusiasmo.",
  "A motivação é o que faz você começar. O hábito é o que faz você continuar.",
  "O maior erro que você pode cometer é o de ficar o tempo todo com medo de cometer algum.",
  "Não importa a cor do céu. Quem faz o dia bonito é você.",
  "O sucesso nunca é definitivo e o fracasso nunca é fatal. É a coragem que conta.",
  "Se você quer algo que nunca teve, precisa fazer algo que nunca fez.",
  "Não tenha medo de desistir do bom para correr atrás do ótimo.",
  "O verdadeiro empreendedor é um fazedor, não um sonhador.",
  "Seja a mudança que você quer ver no mundo.",
  "A persistência é o caminho do êxito.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Você é capaz de fazer coisas incríveis.",
  "Acredite que você pode e já está no meio do caminho.",
  "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.",
]

img.addEventListener('click', () => {
  container.classList.toggle('hide')
  aberto.classList.toggle('hide' && 'abriu')
})

btn.addEventListener('click', () => {
  container.classList.toggle('hide')
  aberto.classList.toggle('hide' && 'abriu')
  fraseAleatoria()
})

function fraseAleatoria() {
  const frase = frasesMotivacionais[0]
  console.log()
}