import React from 'react'
import CampaignsStore from '../stores/campaignsStore'
import { observer } from 'mobx-react'

@observer
export class CampaignsList extends React.Component {
  onNameChange = ev => {
    CampaignsStore.onNameChange(ev.target.value)
  }
  onCreateCampaign = ev => {
    CampaignsStore.onCreateCampaign()

    ev.preventDefault()
  }
  onRemoveCampaign = campaign => {
    return () => CampaignsStore.removeCampaign(campaign)
  }
  render() {
    return (
      <div>
        <h3>Campaigns list</h3>
        <form onSubmit={this.onCreateCampaign}>
          <label>Choose a name:</label>
          <input type="text" onChange={this.onNameChange} name="campaignName" />
          <button type="submit"> Create campaign</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {CampaignsStore.campaigns.map(campaign => {
              return (
                <tr key={campaign.id}>
                  <td>{campaign.data.name}</td>
                  <td onClick={this.onRemoveCampaign(campaign)}>x</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
