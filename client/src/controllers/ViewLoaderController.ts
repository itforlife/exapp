import { Controller } from 'stimulus';
import axios from 'axios';
declare var application;
interface PartialViewResponse {
    component: string;
    styles: string;
}

class ViewLoaderController extends Controller {
    static targets=['trigger'];
    triggerTargets: Array<HTMLElement>;
    async connect() {
       this.triggerTargets.forEach(element => {
            element.addEventListener('click', this.loadView)
       });
     
    }
    loadView = async(ev: MouseEvent) => {
        ev.preventDefault();
        const urlToLoad = ev.srcElement.getAttribute('href');
        const { data } =  await axios.get<PartialViewResponse>(urlToLoad);
        const elementToPopulate = this.data.get('target-element');
        document.querySelector(elementToPopulate).innerHTML = data.component;
    }
}

application.register('viewLoader', ViewLoaderController);
