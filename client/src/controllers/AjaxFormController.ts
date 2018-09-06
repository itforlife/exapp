import { Controller } from 'stimulus';
import axios from 'axios';

declare var application;
interface PartialViewResponse {
    component: string;
    styles: string;
}

class AjaxFormController extends Controller {
    fieldTargets: HTMLElement[];
    static targets = ['field'];
    connect() {
        console.log('ajax form installed');
    }
    htmlToElement(html: string) {
        var template = document.createElement('template');
        html = html.trim();
        template.innerHTML = html;
        return template.content.firstChild;
    }
    async submit(event) {
        event.preventDefault();
        event.stopPropagation();
        const values = Array.from(this.fieldTargets).reduce(
            (values, target: HTMLInputElement) => {
                values[target.name] = target.value;
                return values;
            },
            {}
        );
        const { data } = await axios.post<PartialViewResponse>(
            this.element.getAttribute('action'),
            values
        );
        this.element.parentNode.replaceChild(
            this.htmlToElement(data.component),
            this.element
        );
    }
}

application.register('ajaxForm', AjaxFormController);
