export const validateCredentials = (email, password) => {
    const hardcodedEmail = "user@example.com";
    const hardcodedPassword = "password123";
    return email === hardcodedEmail && password === hardcodedPassword;
};