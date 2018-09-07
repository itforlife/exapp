import * as React from 'react';
import { SignupOrLogin } from '@partials/authentication/SignupOrLogin';
import { Button } from '@elements//index';
import { labels } from '@i18n/en_EN';

interface ILandingPageProps {
    labels: typeof labels;
}

export default class LandingPage extends React.Component<ILandingPageProps> {
    public render() {
        return (
            <div>
                <div>
                    <div />
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-6 col-12">
                                <div>
                                    <h1> {labels.index.mainCallToAction}</h1>
                                    <Button className="btn btn-md">
                                        {labels.index.joinUsButton}
                                    </Button>
                                </div>
                            </div>
                            <SignupOrLogin
                                labels={this.props.labels}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
