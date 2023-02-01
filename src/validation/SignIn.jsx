import * as yup from 'yup';

const SignInValid = yup.object().shape({
  phoneNumber: yup.string().min(6).required('Enter your phoneNumber'),
  password: yup
    .string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 8 chars minimum.')
});
export default SignInValid;
