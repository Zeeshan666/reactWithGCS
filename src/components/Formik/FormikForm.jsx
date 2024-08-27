import React from 'react';
import { Formik, Form } from 'formik';
import FormTypes from './FormTypes';
import { generateInitialValues } from './FormInitializer';
import { validationSchemaCollection } from './FormValidations';
import FormikControl from './FormikControl';

const FormikForm = ({ formType }) => {
    const fields = FormTypes[formType] || [];
    const initialValues = generateInitialValues(formType);
    const validationSchema = validationSchemaCollection[formType];

    const handleSubmit = (values) => {
        console.log("Form data", values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    {fields.map((field, index) => (
                        <FormikControl
                            key={index}
                            control={field.control}
                            name={field.name}
                            label={field.label}
                            options={field.options} 
                        />
                    ))}
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikForm;
