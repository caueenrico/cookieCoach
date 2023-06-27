const container = document.querySelector('div')
const img = document.querySelector('img')
const aberto = document.getElementById('aberto')

const btn = document.querySelector('button')

img.addEventListener('click', () => {
  container.classList.toggle('hide')
  aberto.classList.toggle('hide' && 'abriu')
})

btn.
