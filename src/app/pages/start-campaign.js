import React from 'react'
import { observer, inject } from 'mobx-react'
import { translate } from 'react-i18next'
import { CreateCampaignForm } from '../modules/campaigns/createCampaignForm'

@translate(['data'])
@observer
class StartCampaign extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { t } = this.props
    return (
      <div className="container">
        <CreateCampaignForm />
      </div>
    )
  }
}

export default StartCampaign
