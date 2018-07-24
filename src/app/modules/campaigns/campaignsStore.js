import { observable, action } from 'mobx'

export class CampaignsStore {
  @observable name
  constructor(campaignsCollection) {
    this.campaignsCollection = campaignsCollection
  }

  get campaigns() {
    return this.campaignsCollection.docs
  }

  removeCampaign = campaign => {
    campaign.delete()
  }
}
