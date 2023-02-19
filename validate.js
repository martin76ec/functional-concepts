const { Validation, validator: Validator } = require('./index');

const validator = Validator();

const numberValidation = (x) =>  {
  console.log('evaluating:', x);
  return x > 5;
};
const strValidation = (x) => {
  console.log('evaluating:', x);
  return typeof x === 'string';
}

validator.addValidations(numberValidation, 6);
validator.addValidations(strValidation, 'hola');
validator.addValidations(strValidation, 4);
validator.runValidations();
validator.isValid();
debugger;
