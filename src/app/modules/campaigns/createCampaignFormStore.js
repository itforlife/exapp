import { observable, action } from 'mobx'

export class CreateCampaignFormStore {
  @observable name
  constructor(campaignsCollection) {
    this.campaignsCollection = campaignsCollection
    this.title = ''
    this.summary = ''
    this.description = ''
  }
  @action
  onTitleChange = title => {
    this.title = title
  }
  @action
  onDescriptionChange = description => {
    this.description = description
  }
  @action
  onSummaryChange = summary => {
    this.summary = summary
  }
  @action
  onCreateCampaign = () => {
    this.addCampaign({
      title: this.title,
      description: this.description,
      summary: this.summary,
    })
    this.title = ''
    this.description = ''
    this.summary = ''
  }

  addCampaign = payload => {
    this.campaignsCollection.add(payload)
  }
}
