import React from 'react'
import Link from 'gatsby-link'
import { CampaignsList } from '../components/campaigns'

const IndexPage = () => (
  <div>
    <h1>Exapp.IO</h1>
    <p>Empowering social good</p>
    <CampaignsList />
    <Link to="/page-2/">It works</Link>
  </div>
)

export default IndexPage
