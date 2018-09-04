import * as React from 'react';
import { labels } from '@i18n/en_EN';

interface IFooterProps {
    labels: typeof labels;
}

const Footer = ({ labels }: IFooterProps) => (
    <footer>{labels.layout.footerText}</footer>
);

export default Footer;
