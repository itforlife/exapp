
import { observable, action } from 'mobx';

export class CampaignsStore {

  @observable name;
  constructor(campaignsCollection) {
    this.campaignsCollection = campaignsCollection;
  } 
  @action
  onNameChange = (name) => {
    this.name = name;
  }

  @action
  onCreateCampaign = () => {
    this.addCampaign({
      name: this.name,
    })
    this.name = '';
  }

  get campaigns() {
    return this.campaignsCollection.docs;
  }

  addCampaign = (payload) => {
    this.campaignsCollection.add(payload)
  }

  removeCampaign = (campaign) => {
    campaign.delete();
  }
}
