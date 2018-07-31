import React from 'react'
import { CreateCampaignForm } from '../modules/campaigns/createCampaignForm'
import { comp, IInjectedProps } from '../utils/decorators'

const StartCampaign = comp(
    class extends React.Component<IInjectedProps> {
        constructor(props) {
            super(props)
        }
        public render() {
            return (
                <div className="container">
                    <CreateCampaignForm />
                </div>
            )
        }
    }
)
export default StartCampaign
