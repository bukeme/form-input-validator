const username = document.querySelector('#username')
const password = document.querySelector('#password')

const passwordValidator = /^(?=\D{8})(?=\D*\d{2})/
const invalidColor = 'tomato'
const validColor = '#44e444'

username.addEventListener('input', function() {
    if (this.value.length < 3) {
        this.style.color = invalidColor
    } else {
        this.style.color = validColor
    }
})
password.addEventListener('input', function() {
    if (passwordValidator.test(this.value)) {
        this.style.color = validColor
    } else {
        this.style.color = invalidColor
    }
})