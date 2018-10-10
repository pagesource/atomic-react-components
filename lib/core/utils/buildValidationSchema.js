// @flow
import * as Yup from 'yup';


const getFieldValidation = ({ type = 'string', ...args }) => {
  let config = Yup[type]();
  const validationList = Object.keys(args);

  // TODO: Improve this function to support nested Yup configs
  validationList.forEach((operation) => {
    const validatorArgs = typeof args[operation] === 'string'
      ? Array(args[operation])
      : args[operation];

    config = config[operation](...validatorArgs);
  });

  return config;
};

export const buildSchema = (rawSchema: Object) => {
  const schema = {};
  try {
    const listOfFields = Object.keys(rawSchema);

    listOfFields.forEach((fieldName) => {
      const field = rawSchema[fieldName];
      schema[fieldName] = getFieldValidation(field);
    });

    return Yup.object().shape(schema);
  } catch (e) {
    return schema;
  }
};

export default buildSchema;
