const isEmail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);

const isPhoneNumber = (str) => /^\+371 \d{8}$/.test(str);

const isValidAge = (age) => typeof age === 'number' && age >= 0 && age <= 150;

const isStrongPassword = (str) => str.length >= 8 && /\d/.test(str) && /[a-zA-Z]/.test(str);

const isValidDate = (str) => !isNaN(Date.parse(str));

module.exports = { isEmail, isPhoneNumber, isValidAge, isStrongPassword, isValidDate };