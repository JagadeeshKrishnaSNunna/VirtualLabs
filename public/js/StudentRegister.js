
function CheckUsn(usn,usnd,inpd,usnText){
    const exp=/^1ds17cs[0-9]{3}$/i;
    if(exp.test(usn.value)){
        usnd.style.visibility='hidden';
        inpd.style.visibility='visible';
        usnText.innerHTML='USN :'+usn.value.toUpperCase();
        u=usn.value;
        //alert("success");
        return false;
    }
    else{alert("InValid USN")}
}