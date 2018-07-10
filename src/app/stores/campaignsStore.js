
import { campaignsCollection } from './store';
import { observable, action } from 'mobx';


class CampaignsStore {

  @observable name;

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
    return campaignsCollection.docs;
  }

  addCampaign = (payload) => {
    campaignsCollection.add(payload)
  }

  removeCampaign = (campaign) => {
    campaign.delete();
  }
}

export default new CampaignsStore();