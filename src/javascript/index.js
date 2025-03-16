const LOG_IN = 'Log In';
const SIGN_UP = 'Sign Up';

let contents = document.getElementById('contents');
// TODO: use to message user on unsuccessful auth or to indicate account was created successfully
let message = document.getElementById('message');

// TODO: hookup php to authenticate or create accounts
function displayForm(status) {

    if (status === SIGN_UP) {
        document.getElementById('mayo-logo').style = "max-width : 100px;"
    }

    message.hidden = false;

    // Create/configure new elements to be added
    let form = document.createElement('form');
    form.id = 'input-form';
    let emailInput = createInput('email', true ,'Email');
    let passInput = createInput('password', true, 'Password');
    let submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.value = status;
    submitBtn.className = 'form-button';
    let backLink = document.createElement('button');
    backLink.innerHTML = 'Go Back';
    backLink.className = 'form-button';
    backLink.onclick = function() {location.reload();};

    // Additional elements for sign up
    if (status === SIGN_UP) {
        var nameInput = createInput('text', true, 'First Name');

        // Non-Required : can be configured in account page
        var lastNameInput = createInput('text', false, 'Last Name');
        var heightFeetInput = createInput('number', false, 'Height (Feet)');
        var heightInchesInput = createInput('number', false, 'Height (Inches)');
        var weightInput = createInput('number', false, 'Weight (lbs)');
    }

    //Update status text
    document.getElementById('status').innerHTML = status;

    // Remove button prompts to login / signup
    document.querySelectorAll('.primary-button').forEach( element => {
        contents.removeChild(element);
    });

    // Append new elements
    contents.appendChild(form);
    form.appendChild(emailInput);
    form.appendChild(passInput);
    if (status === SIGN_UP) {
        form.appendChild(nameInput);
        form.appendChild(lastNameInput);
        form.appendChild(heightFeetInput);
        form.appendChild(heightInchesInput);
        form.appendChild(weightInput);  
    }
    contents.appendChild(submitBtn);
    contents.appendChild(backLink);
}

/** 
 * Creates an input element with the specified attributes,
 * automatically is assigned the form-input class for styling
 */
function createInput(type, required, placeHolder) {
    if (typeof type !== 'string' || typeof required !== 'boolean') {
        console.error('Bad params passed into createInput! [ Type = ' + type + " Required = " + required);
        return;
    }

    let input = document.createElement('input');
    input.type = type;
    input.required = required;
    input.className = 'form-input';
    input.placeholder = placeHolder;
    if (required) {
        input.placeholder += ' (Required)';
    }
    
    return input;
}