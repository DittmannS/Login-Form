'use strict';

let movePlaceholder = function() {
    let fieldUser = document.querySelector('.username input');
    let placeholderUser = document.querySelector('.username label');
    
    let fieldPassword = document.querySelector('.password input');
    let placeholderPassword = document.querySelector('.password label');

    fieldUser.onfocus = function() {
        placeholderUser.classList.add('placeholder');
    }; 
    fieldUser.onblur = function() {
        placeholderUser.classList.remove('placeholder');
    };
    
    fieldUser.addEventListener('input', function() {
        console.log('writing');
    })
    
    fieldPassword.onfocus = function() {
        placeholderPassword.classList.add('placeholder');
    }; 
    fieldPassword.onblur = function() {
        placeholderPassword.classList.remove('placeholder');
    };
};

movePlaceholder();
    