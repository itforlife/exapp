import * as React from 'react';
import { CreateCampaignForm } from '@partials/campaigns/createCampaignForm';

import { labels } from '@i18n/en_EN';

interface IStartCampaignProps {
    labels: typeof labels;
}

export default class StartCampaign extends React.Component<
    IStartCampaignProps
> {
    constructor(props) {
        super(props);
    }
    public render() {
        return (
            <div className="container">
                <CreateCampaignForm labels={this.props.labels} />
            </div>
        );
    }
}
