import * as React from 'react';
import { LogIn } from '@partials/authentication/LogIn';
import { Register } from '@partials/authentication/Register';
import { labels } from '@i18n/en_EN';
import { Tab } from '@elements/Tab';

interface SignupOrLoginProps {
    labels: typeof labels;
}

export class SignupOrLogin extends React.Component<
    SignupOrLoginProps
> {
    public render() {
        const labels = this.props.labels;
        const items = [
            {
                label: labels.authentication.loginTab,
                revealsElement: '#login'
            },
            {
                label: labels.authentication.registerTab,
                revealsElement: '#register'
            },
        ]
        return (
            <div className="col col-xl-5 col-lg-6 col-12">
                <div>
                    <Tab items={items} />
                    <div>
                        <div id="login">
                            <LogIn labels={labels} />
                        </div>
                        <div id="register" style={{ display: "none" }}>
                            <Register labels={labels} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
