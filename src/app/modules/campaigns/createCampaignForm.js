import React from 'react'
import { observer, inject } from 'mobx-react'
import { translate } from 'react-i18next'
import { RichTextEditor } from '../elements/rich-text'
import { FloatingInput, Button } from '../elements'
import { createCampaignFormStyles } from './createCampaignForm.css';

@inject('appStore')
@translate(['data'])
@observer
export class CreateCampaignForm extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { t } = this.props
    return (
      <div>
        <h1>{t('startCampaign.campaignInfoTitle')}</h1>
        <div className="row">
          <div className="col-sm-4">
            <div className="form-group">
              <label className="h4" for="campaignTitle">
                Title
              </label>
              <FloatingInput
                name="campaignTitle"
                id="campaignTitle"
                placeholder="Type a campaign title"
              />
            </div>
            <div className="form-group">
              <label className="h4">Upload a main image</label>
              <input type="file" />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="form-group">
              <label className="h4" for="campaignDescription">
                Description
              </label>
              <RichTextEditor placeholder="A detailed description of campaigns goals" />
            </div>
            <div className="form-group">
              <label className="h4" for="campaignShortSummary">
                Short summary
              </label>
              <textarea
                className="form-control"
                placeholder="A really short excerpt of what the campaign is about"
              />
            </div>
            <div className="create-campaign-btn-container">
              <Button className="btn btn-md btn-purple">Create campaign</Button>
            </div>
          </div>
        </div>
        <style jsx>{createCampaignFormStyles}</style>
      </div>
    )
  }
}
