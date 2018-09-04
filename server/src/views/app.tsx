import * as React from 'react';
import { AuthenticatedUserPageLayout } from '@layout/AuthenticatedUserPageLayout';
import { LandingPageLayout } from '@layout/LandingPageLayout';
import { labels } from '@i18n/en_EN';

interface IExappProps {
    labels: typeof labels;
    children: JSX.Element;
}

export default class Exapp extends React.Component<IExappProps> {
    get pageLayout() {
        // Add here funky logic to determine what layout to use
        const currentRoute = '/';
        switch (currentRoute) {
            case '/':
                return LandingPageLayout;
            default:
                return AuthenticatedUserPageLayout;
        }
    }
    public render() {
        const PageLayout = this.pageLayout;
        return (
            <PageLayout labels={this.props.labels}>
                <div>
                    <div>{this.props.children}</div>
                </div>
            </PageLayout>
        );
    }
}
