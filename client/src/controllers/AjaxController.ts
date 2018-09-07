import { Controller } from 'stimulus';
import axios from 'axios';

declare var application;
interface PartialViewResponse {
    component: string;
    styles: string;
}

class AjaxController extends Controller {
    htmlToElement(html: string) {
        var template = document.createElement('template');
        html = html.trim();
        template.innerHTML = html;
        return template.content.firstChild;
    }
    async submit(event) {
        event.preventDefault();
        event.stopPropagation();
        const values = this.collectRequestParams();
        const { data } = await axios.post<PartialViewResponse>(
            this.determineRequestUrl(),
            values
        );
        this.element.parentNode.replaceChild(
            this.htmlToElement(data.component),
            this.element
        );
    }
    private determineRequestUrl() {
        const form =
            this.element.tagName.toLowerCase() === 'form'
                ? this.element
                : this.element.querySelector('form');
        return form.getAttribute('action');
    }
    private collectRequestParams() {
        const fields = Array.from(
            this.element.querySelectorAll('input, select')
        );
        const values = fields
            .filter(target => 'value' in target)
            .reduce((values, target: HTMLInputElement) => {
                values[target.name] = target.value;
                return values;
            }, {});
        return values;
    }
}

application.register('ajax', AjaxController);
