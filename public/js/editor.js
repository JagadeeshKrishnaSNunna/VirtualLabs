const executeCodeBtn = document.querySelector('.editor__run');

const resetCodeBtn = document.querySelector('.editor__reset');
// Setup Ace
let codeEditor = ace.edit("editorCode");
let defaultCode = `#include<stdio.h>

int main(){
// write your code here **Happy Coding**

    return 0;
}
`;

let editorLib = {
    init() {
        // Configure Ace

        // Theme
        codeEditor.setTheme("ace/theme/twilight");

        // Set language
        codeEditor.session.setMode("ace/mode/c_cpp");

        // Set Options
        codeEditor.setOptions({
            // fontFamily: 'Inconsolata',
            // fontSize: '12pt',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
        });

        // Set Default Code
        codeEditor.setValue(defaultCode);
    }
}




// Events
executeCodeBtn.addEventListener('click', () => {
    // Get input from the code editor
    const sourcecode = codeEditor.getValue();
    console.log(sourcecode);
    

});


var x = setInterval(function() {
//    console.log("eksd");
const sourcecode = codeEditor.getValue();
sessionStorage.setItem('uCode',sourcecode);
// console.log(codeEditor.getValue);
},100)

resetCodeBtn.addEventListener('click', () => {
    // Clear ace editor
    // codeEditor.setValue(defaultCode);
    const sourcecode = codeEditor.getValue();
    // sessionStorage.setItem('uCode',sourcecode);
    document.querySelector('form').elements[0].value =sourcecode;
    var test =document.querySelector('form').elements[0].value;
    console.log(test);
})



editorLib.init();










