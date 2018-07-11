import React from 'react';
import Link from 'next/link';
import { CampaignsList } from '../components/campaigns';
import userStore from '../stores/userStore';
import {observer} from 'mobx-react';
const IndexPage = observer(() => (
  <div>
    <h1>Exapp.IO</h1>
    {userStore.isUserLogedIn && <h2> hi {userStore.userProfile.email}</h2>}
    <p>Empowering social good</p>
    <CampaignsList />
    {userStore.isUserLogedIn ? 
      <button type="button" onClick={userStore.signOut}>Sign Out</button>
      :
      <div>
          <Link href="/register-page/">
            <a style={{ fontSize: 20 , display: "block"}}>register</a>
          </Link>
          <Link href="/login-page/">
              <a style={{ fontSize: 20 }}>Log In</a>
          </Link>
        </div>
      }
  </div>
))

export default IndexPage
