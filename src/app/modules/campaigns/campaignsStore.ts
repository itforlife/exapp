import { observable } from 'mobx'
import { Collection } from 'firestorter'

export class CampaignsStore {
  @observable name
  campaignsCollection: Collection
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
