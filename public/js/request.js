$(document).ready(() => {
    let scrolled = false;

    const 
    firstName = $('#firstname'),
    lastName = $('#lastname'),
    email = $('#email'),
    phoneNumber = $('#phno'),
    jobPosition = $('#position'),
    sampleTile = $('#sample'),
    colors = $('#colors'),
    address = $('#address'),
    city = $('#city'),
    state = $('#state'),
    zipCode = $('#zip'),
    country = $('#country');

    $('#submit-request').click(e => {
        e.preventDefault();

        clearErrors();
        
        validateInputs();

        if(!scrolled) {
            $('#request-form').submit();
        }
    })

    function validateInputs() {
        validateRegex(firstName, firstName.val(), isValidName);

        if(lastName.val() !== '' && !isValidName(lastName.val())) {
            mentionError(lastName);
        }

        validateRegex(email, email.val(), isValidEmail);
        validateRegex(phoneNumber, phoneNumber.val(), isValidPhoneNumber);

        validateNotEmpty(jobPosition, jobPosition.find(":selected").val());
        validateNotEmpty(sampleTile, sampleTile.find(":selected").val());
        validateNotEmpty(colors, colors.val());
        validateNotEmpty(address, address.val());
        validateNotEmpty(city, city.val());
        validateNotEmpty(state, state.find(":selected").val());

        validateRegex(zipCode, zipCode.val(), isValidZip);
        
        validateNotEmpty(country, country.val());
    }

    function validateRegex(element, value, validation) {
        if(value === '' || !validation(value)) {
            mentionError(element);
        }
    }

    function validateNotEmpty(element, value) {
        if(value === '') {
            mentionError(element);
        }
    }

    function mentionError(element) {
        element.addClass('invalid');
        if(!scrolled) {
            scrolled = true;
            const y = element[0].getBoundingClientRect().top + window.scrollY - 200;
            window.scroll({
                top: y,
                behavior: 'smooth'
            });
        }
    }

    function clearErrors() {
        scrolled = false;
        firstName.removeClass('invalid');
        lastName.removeClass('invalid');
        email.removeClass('invalid');
        phoneNumber.removeClass('invalid');
        jobPosition.removeClass('invalid');
        sampleTile.removeClass('invalid');
        colors.removeClass('invalid');
        address.removeClass('invalid');
        city.removeClass('invalid');
        state.removeClass('invalid');
        zipCode.removeClass('invalid');
        country.removeClass('invalid');
    }
});

function isValidName(name) {
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    return nameRegex.test(name);
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(number) {
    const numberRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return numberRegex.test(number);
}

function isValidZip(zip) {
    const zipRegex =  /^\d+$/
    return zipRegex.test(zip);
}