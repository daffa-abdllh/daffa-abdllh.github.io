const scriptURL = 'https://script.google.com/macros/s/AKfycbyVQywnUfkJi0tOD9oe_8sGYcFQ1ntOxSVrAeGLGu2-amJoF-SKwr2RWUQcSWDUuWhJtw/exec';
const form = document.forms['my-portfolio-form'];
const send = document.querySelector('.send');
const loading = document.querySelector('.loading');
const alert = document.querySelector('.alert');

form.addEventListener('submit', e => {
    e.preventDefault();
    send.classList.toggle('d-none');
    loading.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        send.classList.toggle('d-none');
        loading.classList.toggle('d-none');
        alert.classList.toggle('d-none');
        form.reset();
        console.log('Success!', response);
    })
    .catch(error => console.error('Error!', error.message))
})