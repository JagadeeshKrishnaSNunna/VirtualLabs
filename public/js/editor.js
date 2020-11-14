const executeCodeBtn = document.querySelector('.editor__run');
// const resetCodeBtn = document.querySelector('.editor__reset');
const express = require("express");
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
            fontFamily: 'Inconsolata',
            fontSize: '12pt',
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
    const userCode = codeEditor.getValue();
    sessionStorage.setItem("u_Code", userCode)
    // Run the user code
    try {
        // new Function(userCode)();
   

    } catch (err) {
        console.error(err);
    }
});

// resetCodeBtn.addEventListener('click', () => {
//     // Clear ace editor
//     codeEditor.setValue(defaultCode);
// })

editorLib.init();










