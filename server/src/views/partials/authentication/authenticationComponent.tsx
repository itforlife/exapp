import * as React from 'react';
import { LogIn } from './logIn';
import { Register } from './register';
import { labels } from '@i18n/en_EN';

interface IAuthenticationComponentProps {
    labels: typeof labels;
}

export class AuthenticationComponent extends React.Component<
    IAuthenticationComponentProps
> {
    public render() {
        const labels = this.props.labels;

        return (
            <div className="col col-xl-5 col-lg-6 col-12">
                <div>
                    <ul>
                        <li>
                            <a>{labels.authentication.loginTab}</a>
                        </li>
                        <li>
                            <a>{labels.authentication.registerTab}</a>
                        </li>
                    </ul>
                    <div>
                        <div>
                            <LogIn labels={labels} />
                        </div>
                        <div>
                            <Register labels={labels} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
