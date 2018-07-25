
import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';


const autheticationFields = [{
    name: 'email',
    rules: 'required|email|string|between:5,25'
  }, {
    name: 'password',
    rules: 'required|string|between:5,25'
  },
  {
    name: 'firstName',
    rules: 'required|string|between:5,25'
  },
  {
    name: 'lastName',
    rules: 'required|string|between:5,25'
  },
];

const profileInformationFields = autheticationFields.concat([
  {
    name: 'birthday',
    rules: 'string'
  },
  {
    phoneNumber: 'phoneNumber',
    rules:'number|between:8:10'
  }
]);

const plugins = { dvr: validatorjs };

export const loginForm = new MobxReactForm({ fields: autheticationFields }, { plugins });
export const registerForm = new MobxReactForm({ fields: autheticationFields }, { plugins });
export const profileInformationForm = new MobxReactForm({ fields: profileInformationFields }, { plugins });