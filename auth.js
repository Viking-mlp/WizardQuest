// auth.js

// Function to generate a verification code
function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();  // Random 6-digit code
}

// User data structure
const User = {
    id: null,
    username: '',
    password: '',
    email: '',
    verificationCode: generateVerificationCode(),
    isVerified: false
};

// Export functions and structures
module.exports = { generateVerificationCode, User };