
function CheckUsn(usn) {
    const exp = /^1ds17cs[0-9]{3}$/i;
    if (exp.test(usn.value)) {
        usn.value=usn.value.toUpperCase()
        sessionStorage.setItem("usn", usn.value)
        return true;
    }
    else { alert("InValid USN"); return false; }
}

function RegisterDetails() {
    const exp = /^[a-zA-Z ]+$/;
    var errMsg = document.getElementById('Invalid');
    var uname = document.getElementById('Studentname');
    var pass = document.getElementById('pass');
    var Conpass = document.getElementById('conpass');
    if (uname.value == '') {
        errMsg.innerHTML = 'Name canot be empty..!';
        uname.style.borderColor = 'red';
        return false;
    }
    if (pass.value == '') {
        errMsg.innerHTML = 'Password canot be empty..!';
        pass.style.borderColor = 'red';
        return false;
    }
    if (Conpass.value == '') {
        errMsg.innerHTML = 'Password has to be conformed..!';
        Conpass.style.borderColor = 'red';
        return false;
    }
    if (Conpass.value != pass.value) {
        errMsg.innerHTML = 'Password misMatch..!';
        Conpass.style.borderColor = 'red';
        pass.style.borderColor = 'red';
        return false;
    }
    if (exp.test(uname.value)) {
        return true;
    }
    errMsg.innerHTML = 'Invalid Name..!';
    uname.style.borderColor = 'red';
    return false;
}