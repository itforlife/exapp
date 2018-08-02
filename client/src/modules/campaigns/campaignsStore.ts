import { observable } from 'mobx'

export class CampaignsStore {
    @observable
    public name
    public campaignsCollection

    get campaigns() {
        return this.campaignsCollection.docs
    }

    public removeCampaign = campaign => {
        campaign.delete()
    }
}
