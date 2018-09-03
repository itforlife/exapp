import { configure } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
