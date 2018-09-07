import { Controller } from 'stimulus';
declare var application;

class SocialAuthController extends Controller {
    fieldTargets: HTMLElement[];
    static targets = ['field'];
    login(ev: MouseEvent) {
        ev.preventDefault();
        const provider = ev.srcElement.getAttribute('name');
        alert('Login with ' + provider);
    }
}

application.register('social-auth', SocialAuthController);
