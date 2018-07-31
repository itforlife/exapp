import { action, observable } from 'mobx'

export class CreateCampaignFormStore {
  @observable public title: string = ''
  @observable public summary: string = ''
  @observable public description: any = {}
  @observable public campaignsCollection: any

  constructor(campaignsCollection) {
    this.campaignsCollection = campaignsCollection
    this.title = ''
    this.summary = ''
    this.description = ''
  }
  @action
  public onTitleChange = title => {
    this.title = title
  }
  @action
  public onDescriptionChange = description => {
    this.description = description
  }
  @action
  public onSummaryChange = summary => {
    this.summary = summary
  }
  @action
  public onCreateCampaign = () => {
    this.addCampaign({
      title: this.title,
      description: this.description,
      summary: this.summary,
    })
    this.title = ''
    this.description = ''
    this.summary = ''
  }

  public addCampaign = payload => {
    this.campaignsCollection.add(payload)
  }
}
