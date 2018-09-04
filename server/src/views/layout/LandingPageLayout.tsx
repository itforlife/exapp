import * as React from 'react';
import { Footer, Header } from '.';
import { labels } from '@i18n/en_EN';

interface ILandingPageLayoutProps {
    labels: typeof labels;
    children: JSX.Element;
}

export const LandingPageLayout = (props: ILandingPageLayoutProps) => (
    <div>
        <Header labels={this.props.labels} />
        {props.children}
        <Footer labels={this.props.labels} />
    </div>
);
