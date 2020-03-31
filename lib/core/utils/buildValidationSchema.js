/**
 * This API is used as an abstraction layer over YUP schema
 * library in order to make form validations more natural
 * Taking an example of a simple user sign in with a username
 * and a password field.
 --------------------------------------------------------------------------
  To create the below Yup Schema equivalent:

  Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .required('Required'),
  })

  A plain object (raw Schema) can be sent to the buildSchema function:

  {
    username: {
      min: [2, 'Too short'],
      max: [50, 'Too long']
      required: 'Required'
    },
    password: {
      required: 'Required'
    }
  }
  --------------------------------------------------------------------------

  Yup: https://github.com/jquense/yup
  formik Validations: https://jaredpalmer.com/formik/docs/guides/validation
*/

import * as Yup from 'yup';

const getFieldValidation = ({ type = 'string', ...args }) => {
  let config = Yup[type]();
  const validationList = Object.keys(args);

  // TODO: Optimise this function and support nested Yup configs
  validationList.forEach((operation) => {
    const validatorArgs =
      typeof args[operation] === 'string' ? Array(args[operation]) : args[operation];

    config = config[operation](...validatorArgs);
  });

  return config;
};

/**
 * The function builds the schema from a plain object to YUP based config.
 * Consider the mentioned example at the start.
 */
export const buildSchema = (rawSchema) => {
  const schema = {};
  try {
    // listOfFields will be assigned ['username', 'password']
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
