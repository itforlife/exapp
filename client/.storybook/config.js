import { configure } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
