import * as ReactDOMServer from 'react-dom/server';
import { getStyles } from 'typestyle';
import * as React from 'react';
import * as fs from 'fs';
import * as path from 'path';
import * as _ from 'lodash';
const htmlPath = path.resolve(__dirname, '..', '..', 'public', 'index.html');
const htmlTemplate = _.template(String(fs.readFileSync(htmlPath)));
const controllersRegex = /data-controller="(.+?)"/gim;

type ComponentType<P> = React.ComponentClass<P> | React.SFC<P>;
const extractControllersInUse = (rendered: string) => {
    let match = null;
    const controllers = [];
    while ((match = controllersRegex.exec(rendered))) {
        controllers.push(match[1]);
    }
    return _.uniq(controllers).map(
        c => `<script src="js/${_.upperFirst(c)}Controller.js"></script>`
    );
};

export const View = <P>(viewToRender: ComponentType<P>) => <TP extends P>(
    object: Object,
    methodName: string,
    descriptor: TypedPropertyDescriptor<(...any) => Promise<TP>>
) => {
    const originalMethod = descriptor.value;
    descriptor.value = (...args) => {
        const dataPromise = originalMethod.apply(this, args);
        return dataPromise.then(data => {
            const component = ReactDOMServer.renderToStaticMarkup(
                React.createElement(viewToRender, data)
            );
            const controllers = extractControllersInUse(component).join('\n');
            const styles = getStyles();
            const rendered = htmlTemplate({
                component,
                styles,
                controllers,
            });
            return rendered;
        });
    };
    return descriptor;
};

export const PartialView = <P>(viewToRender: ComponentType<P>) => <
    TP extends P
>(
    object: Object,
    methodName: string,
    descriptor: TypedPropertyDescriptor<(...any) => Promise<TP>>
) => {
    const originalMethod = descriptor.value;
    descriptor.value = (...args) => {
        const dataPromise = originalMethod.apply(this, args);
        return dataPromise.then(data => {
            const component = ReactDOMServer.renderToStaticMarkup(
                React.createElement(viewToRender, data)
            );
            const styles = getStyles();
            return { component, styles };
        });
    };
    return descriptor;
};
