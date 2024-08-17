export const checkValidation = (email: string, password: string) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if (!email) return 'Email is required*'
    if (!isEmailValid) return "Please enter valid email";
    if (!password) return 'Password is required*'
    if (!isPasswordValid) return "Please Enter valid password";

    return null
}


export const getFirebaseErrorMessage = (errorCode: string): string => {
    console.log(errorCode, "error__")
    switch (errorCode) {
        case 'auth/invalid-credential':
            return 'Invalid credential.';
        case 'auth/invalid-email':
            return 'Invalid email address.';
        case 'auth/user-disabled':
            return 'User account has been disabled.';
        case 'auth/user-not-found':
            return 'No user found with this email.';
        case 'auth/wrong-password':
            return 'Incorrect password.';
        default:
            return 'An unexpected error occurred. Please try again.';
    }
};
