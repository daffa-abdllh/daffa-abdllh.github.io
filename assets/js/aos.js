const myAbout = document.querySelectorAll('.my-about');
const card = document.querySelectorAll('.card');
const galleryImage = document.querySelectorAll('.gallery-img');
const myForm = document.querySelectorAll('.my-form');

myAbout.forEach((about, a) => {
    about.dataset.aos = 'fade-up',
    about.dataset.aosDelay = a * 200,
    about.dataset.aosDuration = 1500
})

card.forEach((card, c) => {
    card.dataset.aos = 'fade-up',
    card.dataset.aosDelay = c * 200,
    card.dataset.aosDuration = 1500
})

galleryImage.forEach((img, i) => {
    img.dataset.aos = 'fade-up',
    img.dataset.aosDelay = i * 200,
    img.dataset.aosDuration = 1500
});

myForm.forEach((form, f) => {
    form.dataset.aos = 'fade-up',
    form.dataset.aosDelay = f * 100,
    form.dataset.aosDuration = 1500
})

AOS.init({
    once: true,
    duration: 1500
});