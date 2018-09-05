import { Controller } from 'stimulus';

export default class extends Controller {
    connect() {
        console.log('Hello World!');
    }
    login(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log('Login clicked...', event);
    }
}
