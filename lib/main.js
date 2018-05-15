class PPNav extends HTMLElement {
    constructor() {
        super();
    }
    get data() {
        this._data;
    }
    set data(val) {
        this._data = val;
        this.render();
    }
    render() {
        this.box.innerHTML = this._data;
    }
    disconnectedCallback() {
        // fires when the component is removed from the dom
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        this[attrName] = newVal;
    }
    adoptedCallback() {
        // fires when the element has been moved into a new document
    }
    connectedCallback() {
        this.innerHTML = `<style>@import "/css/main.css";</style>`;
        if (this.getAttribute('data')) {
            this._data = this.getAttribute('data');
        }
        this._data = this._data || 'hello';
        this.box = document.createElement('input');
        this.appendChild(this.box);
        this.render();
    }
}
customElements.define('my-element', PPNav);
if (window.define) {
    define([], function () {
        return PPNav;
    });
}
