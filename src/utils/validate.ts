export const checkValidation = (email: string, password: string) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if (!email) return 'Email is required*'
    if (!isEmailValid) return "Please enter valid email";
    if (!password) return 'Password is required*'
    if (!isPasswordValid) return "Please Enter valid password";

    return null
}