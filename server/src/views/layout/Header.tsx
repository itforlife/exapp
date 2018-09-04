import * as React from 'react';
import { LanguageSelector } from './LanguageSelector';
import { labels } from '@i18n/en_EN';

interface IHeaderProps {
    labels: typeof labels;
}

const Header = (props: IHeaderProps) => (
    <header>
        <LanguageSelector labels={props.labels} />
    </header>
);

export default Header;
