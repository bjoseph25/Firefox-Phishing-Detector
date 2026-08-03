console.log("CONTENT SCRIPT RUNNING")

function detectLoginForm() {
    const passwordFields = document.querySelectorAll('input[type="password"]');

    console.log("Password fields found:", passwordFields.length);

    return {
        hasPasswordField: passwordFields.length > 0,
        passwordFieldCount: passwordFields.length
    };
}

console.log(detectLoginForm());