import * as yup from 'yup';

export const loginForm = {
  email: '',
  password: '',
};

export const signUpForm = {
  email: '',
  password: '',
  phoneNumber: '',
  confirmPassword: '',
};

export const userDetailsForm = {
  phoneNumber: '',
};

export const forgotPassEmailForm = {
  email: '',
};

export const forgotPassPhoneForm = {
  phoneNumber: '',
};

export const resetPassForm = {
  password: '',
  confirmPassword: '',
};

export const personalInfoForm = {
  firstName: '',
  lastName: '',
};

export const suggestCourseForm = {
  courseName: '',
  courseLocation: '',
};

export const reportIssueForm = {
  email: '',
  subject: '',
  description: '',
};

export const addRequestForm = {
  dateRange: '',
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
    phoneNumber: yup
      .string()
      .required('Phone Number Required')
      .matches(/^[a-zA-Z0-9]*$/, 'Special Characters Are Not Allowed')
      .test(
        'starts-with-1',
        'Phone number must start with 1',
        value => !value || value.startsWith('1'),
      )
      .test(
        'has-11-digits',
        'Phone number must contain exactly 11 digits',
        value => !value || value.length === 11,
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

export const userDetailsValidationSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required('Phone Number Required')
    .matches(/^[a-zA-Z0-9]*$/, 'Special Characters Are Not Allowed')
    .test(
      'starts-with-1',
      'Phone number must start with 1',
      value => !value || value.startsWith('1'),
    )
    .test(
      'has-11-digits',
      'Phone number must contain exactly 11 digits',
      value => !value || value.length === 11,
    ),
});

export const loginValidationSchema = yup.object().shape({
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
});

export const forgotPassEmailSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email address',
    ),
});

export const forgotPassPhoneSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required('Phone Number Required')
    .matches(/^[a-zA-Z0-9]*$/, 'Special Characters Are Not Allowed')
    .test(
      'starts-with-1',
      'Phone number must start with 1',
      value => !value || value.startsWith('1'),
    )
    .test(
      'has-11-digits',
      'Phone number must contain exactly 11 digits',
      value => !value || value.length === 11,
    ),
});

export const resetPassSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required')
    .max(25, 'Maximum 25 Characters Allowed'),
  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm Password Required')
    .max(25, 'Maximum 25 Characters Allowed')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});

export const personalInfoSchema = yup.object().shape({
  firstName: yup
    .string()
    .optional()
    .matches(/^\S*$/, 'Space Not Allowed')
    .matches(/^[a-zA-Z0-9]*$/, 'Special Characters Are Not Allowed')
    .max(25, 'Maximum 25 Characters Allowed'),
  lastName: yup
    .string()
    .optional()
    .matches(/^\S*$/, 'Space Not Allowed')
    .matches(/^[a-zA-Z0-9]*$/, 'Special Characters Are Not Allowed')
    .max(25, 'Maximum 25 Characters Allowed'),
});

export const suggestCourseSchema = yup.object().shape({
  courseName: yup
    .string()
    .required('Course Name Required')
    .max(25, 'Maximum 25 Characters Allowed'),
  courseLocation: yup
    .string()
    .required('Course Location Required')
    .max(25, 'Maximum 25 Characters Allowed'),
});

export const reportIssueSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email address',
    ),
  subject: yup
    .string()
    .required('Subject Required')
    .max(25, 'Maximum 25 Characters Allowed'),
  description: yup
    .string()
    .required('Description Required')
    .max(1000, 'Maximum 1,000 Characters Allowed'),
});

export const addRequestSchema = yup.object().shape({
  dateRange: yup.string().required('Date Range Required'),
});
