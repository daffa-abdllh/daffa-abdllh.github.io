const scriptURL = 'https://script.google.com/macros/s/AKfycbx8XjY9nXLn8yUK652wBIvckZKtB_gZcKymud8TajdSke6SV_a24mb3yxvinRUISD4qbg/exec'
const form = document.forms['contact-form']
const send = document.querySelector('.send')
const loading = document.querySelector('.loading')
const sentMessage = document.querySelector('.sent-message')
      
form.addEventListener('submit', e => {
    e.preventDefault()
    // ketika tombol kirim diklik
    // tampilkan tombol loading, hilangkan tombol kirim
    loading.classList.toggle('d-none')
    send.classList.toggle('d-none')
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        // tampilkan tombol kirim, hilangkan tombol loading
            loading.classList.toggle('d-none')
            send.classList.toggle('d-none')
            // tampilkan alert
            sentMessage.classList.toggle('d-none')
            // reset form
            form.reset()
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})