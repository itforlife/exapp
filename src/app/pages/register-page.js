import React from 'react';
import Link from 'next/link';
import userStore from '../stores/userStore';
import { observer } from 'mobx-react';

const RegisterPage = observer(() => {
  const onInputChange = (ev) => {
    userStore.fieldChange(ev.target.name, ev.target.value);
  }
  const onCreateUser = async (ev) => {
    await userStore.createUser();
    if(userStore.isUserLogedIn) {
        window.location.href = '/';
    }
  }
  return (
    <div>
      <h1>Register</h1>
          <input type="text" onChange={onInputChange} name="email" placeholder="email"/>
          <input type="text" onChange={onInputChange} name="username" placeholder="username"/>
          <input type="text" onChange={onInputChange} name="name" placeholder="name"/>
          <input type="password" onChange={onInputChange} name="password" placeholder="password" />
          <button type="button" onClick={onCreateUser}> Register</button>
    </div>
  )})

export default RegisterPage;
