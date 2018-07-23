import React from 'react'
import { observer, inject } from 'mobx-react'
import { translate } from 'react-i18next'
import { RichTextEditor } from '../modules/elements/rich-text'
import { withRouter } from 'next/router'

@inject('appStore')
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
        <h1>{t('startCampaign.campaignInfoTitle')}</h1>
        <div className="row">
          <div className="form-group">
            <label for="campaignTitle">Title</label>
            <input
              type="text"
              name="campaignTitle"
              id="campaignTitle"
              placeholder="Campaign title"
            />
          </div>
          <div className="form-group">
            <label for="campaignDescription">Description</label>
            <RichTextEditor />
          </div>
        </div>
      </div>
    )
  }
}

export default StartCampaign
