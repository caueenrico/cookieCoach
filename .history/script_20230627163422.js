let img = document.querySelector('img');

img.addEventListener('click', () => {
    img.classList.toggle('active');
    console.log('clicked');
}
)