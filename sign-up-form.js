const pass1 = document.getElementById('password');
const pass2 = document.getElementById('confirmPassword');
const input = document.getElementById('createAccount');
// const validityState = input.validity;






function validate() {
    // const input = document.getElementById(inputID);
   
        if (pass1.value != pass2.value) {
                pass2.setCustomValidity('Passwords do not match');
        } else {
            pass2.setCustomValidity('');
        }
    
//   reportValidity() needs to be called on the input variable to make
// setCustomValidity work
    pass2.reportValidity();

}


pass2.addEventListener('change', (e) => {
    
    validate()



    // if (pass1.value != pass2.value) {
    //     input.setCustomValidity('Passwords do not match');
    // }

    // input.reportValidity();

    
})
    