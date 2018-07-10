import React from 'react'
import API from '../services/api'

export class CampaignsList extends React.Component {
  constructor() {
    super()
    this.state = {
      campaigns: [],
    }
  }
  componentWillMount() {
    API.campaigns.onSnapshot(querySnapshot => {
      this.setState({ campaigns: querySnapshot.docs })
    })
  }
  onNameChange = ev => {
    this.setState({ name: ev.target.value })
  }
  onCreateCampaign = ev => {
    API.campaigns.add({
      name: this.state.name,
    })
    ev.preventDefault()
    ev.stopPropagation()
  }
  render() {
    return (
      <div>
        <h3>Campaigns list</h3>
        <form onSubmit={this.onCreateCampaign}>
          <label>Campaign name</label>
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
            {this.state.campaigns.map(campaignDoc => {
              const campaign = campaignDoc.data()
              return (
                <tr key={campaignDoc.id}>
                  <td>{campaign.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
