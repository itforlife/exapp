import { Controller } from 'stimulus';
declare var application;

class SelectController extends Controller {
    element: HTMLSelectElement;
    newDropdown: HTMLDivElement;
    selectedItem: HTMLLIElement;
    connect() {
        this.element.style.display = 'none';
        this.newDropdown = this.replaceDropdown();
    }
    disconnect() {
        const items = Array.from(this.newDropdown.querySelectorAll('li'));
        items.forEach(item =>
            item.removeEventListener('click', this.elementSelectListener)
        );
    }
    private replaceDropdown = () => {
        const newDropdown = document.createElement('div');
        const dropdownLabel = document.createElement('label');
        const dropdownList = document.createElement('ul');
        dropdownList.classList.add(this.data.get('item-class'));
        dropdownLabel.addEventListener('click', this.toggle);
        document.addEventListener('click', this.checkIfShouldClose);
        const children = this.createItems(dropdownLabel);
        children.forEach(c => dropdownList.appendChild(c));
        newDropdown.appendChild(dropdownLabel);
        newDropdown.appendChild(dropdownList);
        this.element.parentNode.insertBefore(newDropdown, this.element);
        return newDropdown;
    };
    private open = () => {
        this.newDropdown.querySelector('ul').style.display = 'block';
    };
    private close = () => {
        this.newDropdown.querySelector('ul').style.display = 'none';
    };
    private toggle = () => {
        const isClosed =
            this.newDropdown.querySelector('ul').style.display === 'none';
        isClosed ? this.open() : this.close();
    };
    private checkIfShouldClose = (ev: MouseEvent) => {
        const label = this.newDropdown.querySelector('label');
        if (!label.contains(ev.srcElement)) {
            this.close();
        }
    };
    private updateLabel = newLabel => {
        this.newDropdown.querySelector('label').innerHTML = newLabel;
    };
    private elementSelectListener = (ev: MouseEvent) => {
        const val = ev.srcElement.getAttribute('data-value');
        const itemSelectedCls = this.data.get('item-selected-class');
        if (this.selectedItem) {
            this.selectedItem.classList.toggle(itemSelectedCls);
        }
        this.element
            .querySelector(`option[value=${val}]`)
            .setAttribute('selected', 'true');
        ev.srcElement.classList.add(itemSelectedCls);
        this.selectedItem = ev.srcElement as HTMLLIElement;
        this.updateLabel(this.selectedItem.innerHTML);
        this.element.value = val;
        this.close();
    };

    private createItems(dropdownLabel: HTMLLabelElement) {
        return Array.from(this.element.querySelectorAll('option')).map(
            option => {
                const li = document.createElement('li');
                li.innerHTML = option.innerHTML;
                const value = option.getAttribute('value');
                this.syncSelectedOption(option, li, dropdownLabel);
                li.setAttribute('data-value', value);
                li.classList.add(this.data.get('item-class'));
                li.addEventListener('click', this.elementSelectListener);
                return li;
            }
        );
    }

    private syncSelectedOption(
        option: HTMLOptionElement,
        li: HTMLLIElement,
        dropdownLabel: HTMLLabelElement
    ) {
        const isSelected = option.getAttribute('selected');
        if (isSelected) {
            li.setAttribute('data-selected', isSelected);
            dropdownLabel.innerHTML = li.innerHTML;
            li.classList.add(this.data.get('item-selected-class'));
            this.selectedItem = li;
        }
    }
}

application.register('select', SelectController);
