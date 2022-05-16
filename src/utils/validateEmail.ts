export const validateEmail = (email:string) => {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}