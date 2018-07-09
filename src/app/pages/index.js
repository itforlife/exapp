import React from 'react';
import Link from 'next/link';
import { CampaignsList } from '../components/campaigns';

const IndexPage = () => (
  <div>
    <h1>Exapp.IO</h1>
    <p>Empowering social good</p>
    <CampaignsList />
    <Link href="/page-2/">
      <a style={{ fontSize: 20 }}>It works</a>
    </Link>
  </div>
)

export default IndexPage
