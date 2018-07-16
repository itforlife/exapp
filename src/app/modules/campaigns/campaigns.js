import React from 'react'
import { observer, inject } from 'mobx-react';

@inject('exappStore')
@observer
export class CampaignsList extends React.Component {
  onNameChange = ev => {
    this.props.exappStore.campaignsStore.onNameChange(ev.target.value);
  }
  onCreateCampaign = ev => {
    this.props.exappStore.campaignsStore.onCreateCampaign();

    ev.preventDefault()
  }
  onRemoveCampaign = (campaign) => {
    return () => this.props.exappStore.campaignsStore.removeCampaign(campaign);
  }
  render() {
    const { campaignsStore } = this.props.exappStore;
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
            {campaignsStore.campaigns.map(campaign => {
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
