import * as ReactDOMServer from 'react-dom/server';
import * as React from 'react';

export const View = <P>(viewToRender: React.ComponentClass<P>) => (
    object: Object,
    methodName: string,
    descriptor: TypedPropertyDescriptor<(...any) => Promise<P>>
) => {
    const originalMethod = descriptor.value;
    descriptor.value = (...args) => {
        const dataPromise = originalMethod.apply(this, args);
        return dataPromise.then(data =>
            ReactDOMServer.renderToStaticMarkup(
                React.createElement(viewToRender, data)
            )
        );
    };
    return descriptor;
};
