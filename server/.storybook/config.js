import { configure } from '@storybook/react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}
const controllers = require.context(
    '../public/assets/js/',
    true,
    /Controller.js$/
);
controllers.keys().forEach(f => controllers(f));
configure(loadStories, module);
