import { Controller } from 'stimulus';
declare var application;

class TabsControllers extends Controller {
    selectedTab: HTMLElement;
    connect() {
        // Reveal the initial tab
        this.selectedTab = this.element.querySelector('.active');
        if (this.selectedTab) {
            this.setRevealedElementDisplay(this.selectedTab, 'block');
        }
    }
    setRevealedElementDisplay(tab: HTMLElement, display: string = 'block') {
        const revealSelector = tab.getAttribute('data-tabs-reveal');
        const revealElement: HTMLElement = document.querySelector(
            revealSelector
        );
        if (revealElement) {
            revealElement.style.display = display;
        } else {
            console.error(
                `TabsController: Cannot find element to reveal matching select ${revealSelector}`
            );
        }
    }
    revealTab(ev: MouseEvent) {
        ev.preventDefault();
        if (this.selectedTab) {
            this.selectedTab.classList.remove('active');
            this.setRevealedElementDisplay(this.selectedTab, 'none');
        }
        this.selectedTab = ev.srcElement as HTMLElement;
        this.selectedTab.classList.add('active');
        this.setRevealedElementDisplay(this.selectedTab, 'block');
    }
}

application.register('tabs', TabsControllers);
