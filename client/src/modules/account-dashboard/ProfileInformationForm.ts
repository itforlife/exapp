
import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';


const fields = [{
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
  {
    name: 'birthday',
    rules: 'string'
  },
  {
    phoneNumber: 'phoneNumber',
    rules:'number|between:8:10'
  }
];


const plugins = { dvr: validatorjs };

export const profileInformationForm = new MobxReactForm({ fields }, { plugins });