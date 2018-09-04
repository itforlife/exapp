import * as React from 'react';
import { labels } from '@i18n/en_EN';

interface ILanguageSelectorProps {
    labels: typeof labels;
}

export const LanguageSelector = (props: ILanguageSelectorProps) => {
    return (
        <div>
            <ul>
                <li data-lang="en_EN">EN</li>
                <li data-lang="ro_RO">RO</li>
            </ul>
        </div>
    );
};
