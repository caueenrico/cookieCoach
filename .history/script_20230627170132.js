const img = document.querySelector('img');
const btn = document.querySelector('button');

img.addEventListener('click', () => {
    img.classList.toggle('hide');
    console.log('clicked');
}
)

btn.addEventListener('click', () => {
  btn.classList.remove('abriu')
  btn.classList.toggle('hide')
})