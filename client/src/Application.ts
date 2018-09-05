import { Application } from 'stimulus';
import { definitionsFromContext } from 'stimulus/webpack-helpers';

const application = Application.start();
const context = require.context(__dirname + '/controllers', true, /\.ts$/);
application.load(definitionsFromContext(context));
