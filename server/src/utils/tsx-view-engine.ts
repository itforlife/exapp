import * as fs from 'fs';
import * as ReactDOMServer from 'react-dom/server';
import * as React from 'react';

export const registerEngine = (app, viewsPath = './views') => {
    app.engine('tsx', function(filePath, options, callback) {
        // define the template engine
        delete require.cache[require.resolve(filePath)];
        const element = React.createElement(
            require(filePath).default,
            ...options
        );
        const rendered = ReactDOMServer.renderToStaticMarkup(element);
        return callback(null, rendered);
    });
    app.set('views', viewsPath);
    app.set('view engine', 'tsx');
};
