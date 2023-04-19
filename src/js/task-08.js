const formEl = document.querySelector('.login-form');
const profile = {}
formEl.addEventListener('submit', (event) => {
    event.preventDefault()
if(formEl.elements.email.value === '' || formEl.elements.password.value === ''){
    alert('Please fill in all the fields!');
}  
profile.email = formEl.elements.email.value;
profile.password = formEl.elements.password.value;
    console.log(profile);
    event.currentTarget.reset();
})
