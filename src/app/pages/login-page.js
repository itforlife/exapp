import React from 'react';
import userStore from '../stores/userStore';
import { observer } from 'mobx-react';

const LoginPage = observer(() => {
  const onInputChange = (ev) => {
    userStore.fieldChange(ev.target.name, ev.target.value);
  }
  const onUserLogin = async (ev) => {
    await userStore.signInEmail();
    if(userStore.isUserLogedIn) {
        window.location.href = '/';
    }
  }
  return (
    <div>
      <h1>Login</h1>
          {userStore.errorMessage && <p>{userStore.errorMessage}</p>}
          <input type="text" onChange={onInputChange} name="email" placeholder="email"/>
          <input type="password" onChange={onInputChange} name="password" placeholder="password" />
          <button type="button" onClick={onUserLogin}> Login</button>
    </div>
  )})

export default LoginPage;
