import * as yup from 'yup';

  
  const SignUpValid = yup.object().shape({
    name: yup.string().min(3).required('please enter your name '),
    phoneNumber: yup.string().min(6).required('Enter your phoneNumber'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
      confirmpassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Passwords must match.'),
  });


export default SignUpValid;
