


function FormSubmit() {
    var usn = document.getElementById('usn');
    // document.getElementById("user").innerHTML="1ds17cs008";
    usn.value=usn.value.toUpperCase();
    var err = document.getElementById('Invalid');
    var pass = document.getElementById('password');
    var exp = /^1ds17cs[0-9]{3}$/i;
    if (usn.value == "") {
        err.innerHTML = "USN cannot be Empty..!";
        err.style.visibility = 'visible';
        usn.style.borderColor = 'red';
        return false;
    }
    if (pass.value == '') {
        err.innerHTML = "Password cannot be Empty..!";
        err.style.visibility = 'visible';
        pass.style.borderColor = 'red';
        return false;
    }
    if (exp.test(usn.value)) {
        return true;
    } else {
        err.innerHTML = "Check USN and Password..!";
        pass.style.borderColor = 'red';
        err.style.visibility = 'visible';
        usn.style.borderColor = 'red';
        return false;
    }
}