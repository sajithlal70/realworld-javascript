
document.getElementById('loginForm').addEventListener('submit',(event)=>{
    event.preventDefault();
    
    //get values from the form and trim the spaces
    const userName = document.getElementById('userName').value.trim();
    const password = document.getElementById('password').value.trim();

    //Error message elements
    const userNameError = document.getElementById('userNameError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');


    //Clearing Previous Messages
    userNameError.textContent = ''
    passwordError.textContent = ''
    successMessage.textContent = ''

    let isValid = true
    
    if(!userName){
        userNameError.textContent = 'Username is required'
        isValid = false

        // Clear After 3 Seconds
        setTimeout(()=>{
            userNameError.textContent = ''
        },3000)
    }
    if(!password){
        passwordError.textContent = 'Password Is required'
        isValid = false
        setTimeout(()=>{
            passwordError.textContent = ''
        },3000)
    }
    if(isValid){
        successMessage.textContent = 'Login Successful'
        setTimeout(()=>{
            successMessage.textContent = ''
        },3000);
        event.target.reset();
    }
})

