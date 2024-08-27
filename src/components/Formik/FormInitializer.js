
import FormTypes from './FormTypes';

export const generateInitialValues = (formType) => {
  const fields = FormTypes[formType] || [];
  return fields.reduce((acc, field) => {
      if (field.control === 'checkbox') {
          acc[field.name] = [];
      } else {
          acc[field.name] = '';
      }
      return acc;
  }, {});
};
