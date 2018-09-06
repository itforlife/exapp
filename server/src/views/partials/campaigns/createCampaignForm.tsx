import * as React from 'react';
import { Button, FloatingInput } from '@elements/index';
import { labels } from '@i18n/en_EN';

interface ICreateCampaignFormProps {
    labels: typeof labels;
}

export class CreateCampaignForm extends React.Component<
    ICreateCampaignFormProps
> {
    constructor(props) {
        super(props);
    }
    public render() {
        return (
            <div>
                <h1>{labels.startCampaign.campaignInfoTitle}</h1>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <h4>Title</h4>
                            <FloatingInput
                                label="Campaign title"
                                name="campaignTitle"
                                id="campaignTitle"
                                placeholder="Type a campaign title"
                            />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="form-group">
                            <h4>Description</h4>
                        </div>
                        <div className="form-group">
                            <h4>Short summary</h4>
                            <textarea
                                className="form-control"
                                placeholder="A really short excerpt of what the campaign is about"
                            />
                        </div>
                        <div>
                            <Button className="btn btn-md">
                                Create campaign
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
