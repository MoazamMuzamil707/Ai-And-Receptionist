import * as Yup from 'yup';

export const createValidationSchema = (formConfig) => {
  let validationSchema = {};

  formConfig.forEach((field) => {
    if (field.required) {
      switch (field.type) {
        case 'email':
          validationSchema[field.name] = Yup.string()
            .email('Invalid email format')
            .matches(new RegExp(field.pattern), 'Email must be in the format example@gmail.com')
            .required('Email is required');
          break;
        case 'password':
          validationSchema[field.name] = Yup.string()
            .matches(new RegExp(field.pattern), 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character')
            .required('Password is required');
          break;
        case 'checkbox':
          validationSchema[field.name] = Yup.boolean()
            .required('This field is required')
            .oneOf([true], 'You must accept the terms and conditions');
          break;
        // Add more field types as necessary
        default:
          validationSchema[field.name] = Yup.string()
            .required(`${field.label} is required`);
      }
    } else {
      switch (field.type) {
        case 'email':
          validationSchema[field.name] = Yup.string()
            .email('Invalid email format')
            .matches(new RegExp(field.pattern), 'Email does not match the required format');
          break;
        case 'password':
          validationSchema[field.name] = Yup.string()
            .matches(new RegExp(field.pattern), 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character');
          break;
        // Add more field types as necessary
        default:
          validationSchema[field.name] = Yup.string();
      }
    }
  });

  return Yup.object().shape(validationSchema);
};
