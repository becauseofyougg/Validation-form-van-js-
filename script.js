const form = document.getElementById('form');
const username = document.getElementById('username');
const usersurname = document.getElementById('usersurname');
const birthDate = document.getElementById('birthdate');
// const sex = document.getElementById('sex');
const accountName = document.getElementById('account-name');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});


function checkInputs() { 
    const usernameValue = username.value.trim();
    const usersurnameValue = usersurname.value.trim();
    const birthDateValue = birthDate.value.trim();
    // const sexValue = sex.value.trim();
    const accountNameValue = accountName.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if(usernameValue === '') {
        setErrorFor(username, 'Укажите имя');
    } else {
        setSuccessFor(username);
    }

    if(usersurnameValue === '') {
        setErrorFor(usersurname, 'Укажите фамилию');
    } else {
        setSuccessFor(usersurname);
    }

    if(birthDateValue === '') {
        setErrorFor(birthDate, 'Укажите дату рождения');
    } else {
        setSuccessFor(birthDate);
    }

    if(accountNameValue === '') {
        setErrorFor(accountName, 'Укажите желаемое имя аккаунта ');
    } else {
        setSuccessFor(accountName);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Укажите пароль');
    } else {
        setSuccessFor(password);        
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Укажите пароль');
    } else if(passwordValue !== password2Value) {        
        setErrorFor(password2, 'Пароли не совпадают');
    } else {
        setSuccessFor(password2);        
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}