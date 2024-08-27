import * as Yup from 'yup';

const detailsValidationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    bio: Yup.string(),
    city: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    skills: Yup.array().of(Yup.string()).required('At least one skill must be selected'), // Ensure skills are selected
    dob: Yup.date().required('Required'),
});

const loginValidationSchema = Yup.object({
    username: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
});

export const validationSchemaCollection = {
    details: detailsValidationSchema,
    login: loginValidationSchema
};
