function signup() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if (email.value != '' && password.value != '') {
        let mycheck = JSON.parse(localStorage.getItem('dataStore')) || [];
        localStorage.setItem('dataStore', JSON.stringify(mycheck));
        let flag = true
        for (let i = 0; i < mycheck.length; i++) {
            if (mycheck[i].email == email.value && mycheck[i].password == password.value) {
                alert('This Email is already register try another');
                flag = false
            }
        }

        if (flag == true) {
            mycheck.push({
                email: email.value,
                password: password.value
            })
            localStorage.setItem('dataStore', JSON.stringify(mycheck));
            alert('Signup Sucessfully!')
            location.href = 'login.html'
        }

    } else {
        alert('Please Fill the Data!')
    }

}

function sign() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if (email.value != '' && password.value != '') {
        let myobj = {
            email: email.value,
            password: password.value
        }

        let check = JSON.parse(localStorage.getItem('dataStore'), myobj);
        let flag = false;
        for (let i = 0; i < check.length; i++) {
            if (check[i].email === myobj.email && check[i].password === myobj.password) {
                flag = true
            }
        }

        if (flag) {
            alert('login successfully');
            location.href = 'user.html'
        } else {
            alert('Your Email and Password is Incorrect!')
        }
    } else {
        alert('Please login!')
    }
}