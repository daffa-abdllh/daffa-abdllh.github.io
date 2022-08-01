const scriptURL = 'https://script.google.com/macros/s/AKfycbx8XjY9nXLn8yUK652wBIvckZKtB_gZcKymud8TajdSke6SV_a24mb3yxvinRUISD4qbg/exec'
const form = document.forms['wpu-contact-form']
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const alert = document.querySelector('.alert')
      
form.addEventListener('submit', e => {
    e.preventDefault()
    // ketika tombol kirim diklik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none')
    btnKirim.classList.toggle('d-none')
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        // tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none')
            btnKirim.classList.toggle('d-none')
            // tampilkan alert
            alert.classList.toggle('d-none')
            // reset form
            form.reset()
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})