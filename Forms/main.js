document.getElementById('loginForm').addEventListener('submit',(event)=>{
    event.preventDefault()
    const username = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    if(!username && !password){
        alert('Please fill the fields')
    }
    else if(!username){
        alert('Username Required');
    }
    else if(!password){
        alert('Password Required');
    }
    else{
        alert('Login Successful');
    }

});