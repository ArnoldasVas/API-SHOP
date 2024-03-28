function registerUserValidation(user) {
  if (!user?.username?.trim()) {
    throw new Error('User is required. Please check if it is provided.');
  }

  if (!user?.password?.trim()) {
    throw new Error('Password is required. Please check if it is provided.');
  }
}

module.exports = { registerUserValidation };
