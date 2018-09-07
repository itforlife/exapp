import { Controller } from 'stimulus';
declare var application;


class SocialAuthController extends Controller {
    fieldTargets: HTMLElement[];
    static targets = ['field'];
    login(ev: MouseEvent) {
        const provider = ev.srcElement.getAttribute('name');
        alert('Login with '+provider);
    }
}

application.register('socialAuth', SocialAuthController);
