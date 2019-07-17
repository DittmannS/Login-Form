'use strict';
console.log(this);

let movePlaceholder = function() {
    let fieldUser = document.getElementsByClassName('input');
    let placeholderUser = document.querySelector('.label');
    
    console.log(fieldUser);
    console.log(placeholderUser);
    /*
    let fieldPassword = document.querySelector('.password input');
    let placeholderPassword = document.querySelector('.password label');
    */
    for(var i = 0; i < fieldUser.length; i++){

        fieldUser[i].onfocus = function() {
            this.classList.add('placeholder');
        }; 
        
        fieldUser[i].onblur = function() {
            this.classList.remove('placeholder');
        };
        
        fieldUser[i].addEventListener('change', function() {
            if(this.value.length != null) {
                this.classList.add('writing');
            } else {
                this[i].classList.remove('writing');
            }
        });
    }
    
    /*
    fieldPassword.onfocus = function() {
        placeholderPassword.classList.add('placeholder');
    }; 
    fieldPassword.onblur = function() {
        placeholderPassword.classList.remove('placeholder');
    };
    fieldPassword.addEventListener('change', function() {
        if(fieldPassword.value.length != null) {
            placeholderPassword.classList.add('writing');
        } else {
            placeholderPassword.classList.remove('writing');
        }
    });
    */
};

movePlaceholder();
    