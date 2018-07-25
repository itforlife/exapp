import { Collection } from 'firestorter'
import { observable } from 'mobx'

export class CampaignsStore {
    @observable public name
    public campaignsCollection: Collection
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
