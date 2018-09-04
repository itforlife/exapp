import * as React from 'react';
import { Footer, Header } from '.';
import { labels } from '@i18n/en_EN';

interface IAuthenticatedUserPageLayoutProps {
    labels: typeof labels;
    children: JSX.Element;
}

export class AuthenticatedUserPageLayout extends React.Component<
    IAuthenticatedUserPageLayoutProps
> {
    public render() {
        return (
            <div>
                <Header labels={this.props.labels} />
                {this.props.children}
                <Footer labels={this.props.labels} />
            </div>
        );
    }
}
