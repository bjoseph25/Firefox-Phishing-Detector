export function detectLoginForm() {
    const passwordFields = document.querySelectorAll('input[type="password"]');

    return {
        hasPasswordField: passwordFields.length > 0,
        hasPasswordFieldCount: passwordFields.length
    };
}