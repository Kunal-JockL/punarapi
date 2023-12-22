$(document).ready(() => {
    let scrolled = false;

    const firstName = $("#firstname"),
        lastName = $("#lastname"),
        email = $("#email"),
        phoneNumber = $("#phno"),
        state = $("#state"),
        country = $("#country"),
        jobPosition = $("#position"),
        message = $('#message');

    $("#submit-request").click((e) => {
        e.preventDefault();

        clearErrors();

        validateInputs();

        if (!scrolled) {
            $("#contact-form").submit();
        }
    });

    function validateInputs() {
        validateRegex(firstName, firstName.val(), isValidName);
        validateRegex(lastName, lastName.val(), isValidLastName);
        validateRegex(email, email.val(), isValidEmail);
        validateRegex(phoneNumber, phoneNumber.val(), isValidPhoneNumber);

        validateNotEmpty(state, state.find(":selected").val());
        validateNotEmpty(country, country.val());

        validateNotEmpty(jobPosition, jobPosition.find(":selected").val());
        validateNotEmpty(message, message.val());
    }

    function validateRegex(element, value, validation) {
        if (value === "" || !validation(value)) {
            mentionError(element);
        }
    }

    function validateNotEmpty(element, value) {
        if (value === "") {
            mentionError(element);
        }
    }

    function mentionError(element) {
        element.addClass("invalid");
        if (!scrolled) {
            scrolled = true;
            const y =
                element[0].getBoundingClientRect().top + window.scrollY - 200;
            window.scroll({
                top: y,
                behavior: "smooth",
            });
        }
    }

    function clearErrors() {
        scrolled = false;
        firstName.removeClass("invalid");
        lastName.removeClass("invalid");
        email.removeClass("invalid");
        phoneNumber.removeClass("invalid");
        state.removeClass("invalid");
        country.removeClass("invalid");
        jobPosition.removeClass("invalid");
        message.removeClass("invalid");
    }
});

function isValidName(name) {
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    return nameRegex.test(name);
}

function isValidLastName(name) {
    const nameRegex = /^[a-zA-Z ]{1,30}$/;
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
