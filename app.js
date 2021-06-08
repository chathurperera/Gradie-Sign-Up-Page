const input = document.querySelector('#passwrd');
const toggleView = document.querySelector('#toggleEye');

toggleView.addEventListener('click' , (e) => {
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type',type);

    this.classList.toggle('fa-eye-slash');
})

inputValue = input.nodeValue;
