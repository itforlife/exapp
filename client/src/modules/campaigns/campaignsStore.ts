import { observable } from 'mobx'

export class CampaignsStore {
    @observable public name
    public campaignsCollection
    constructor(campaignsCollection) {
        this.campaignsCollection = campaignsCollection
    }

    get campaigns() {
        return this.campaignsCollection.docs
    }

    public removeCampaign = campaign => {
        campaign.delete()
    }
}
