import { Controller } from 'stimulus';

declare var application;

class ActionConfirmationController extends Controller {
    fieldTargets: HTMLElement[];
    static targets = ['field'];
    confirm(ev) {
        ev.preventDefault();
        confirm(this.data.get('text') || 'Are you sure');
    }
}

application.register('action-confirmation', ActionConfirmationController);
