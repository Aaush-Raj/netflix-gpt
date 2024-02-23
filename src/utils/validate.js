export const validateFormData = (email, password) => {
  console.log(email, password);
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  console.log(isEmailValid);
  const isPasswordValid = /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    password
  );
  console.log(isPasswordValid);

  if (!isEmailValid) return "Enter a valid email!";
  if (!isPasswordValid) return "Enter a valid password!";

  return null
};
