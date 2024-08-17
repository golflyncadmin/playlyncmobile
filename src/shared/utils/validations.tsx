import * as yup from 'yup';

export const loginForm = {
  username: '',
  password: '',
};
export const signUpForm = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const forgotPassForm = {
  email: '',
};

export const resetPassForm = {
  password: '',
  confirmPassword: '',
};

export const signUpValidationSchema = () => {
  const baseSchema = {
    email: yup
      .string()
      .required('Email Required')
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email address',
      ),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password Required')
      .max(25, 'Maximum 25 Characters Allowed'),
    confirmPassword: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password Confirmation Required')
      .oneOf([yup.ref('password'), null], 'Passwords do not match')
      .max(25, 'Maximum 25 Characters Allowed'),
  };

  return yup.object().shape(baseSchema);
};

export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required')
    .max(25, 'Maximum 25 Characters Allowed'),
});

export const forgotPassValidation = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
});

export const resetPassValidation = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required')
    .max(25, 'Maximum 25 Characters Allowed'),
  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm Password Required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});
