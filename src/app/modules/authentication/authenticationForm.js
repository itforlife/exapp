
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

];
const plugins = { dvr: validatorjs };

export const loginForm = new MobxReactForm({ fields }, { plugins });
export const registerForm = new MobxReactForm({ fields }, { plugins });
