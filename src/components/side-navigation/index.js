import { ElementLiteLit, html } from '@littleq/element-lite';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements, CustomEvent } = window;

class Page extends ElementLiteLit(HTMLElement) {
  static get is () { return 'side-navigation'; }

  constructor () {
    super();
    this.__data = {};
  }

  set navigation (navigation) {
    this.__data['navigation'] = navigation;
    this.invalidate();
  }

  get navigation () {
    return this.__data['navigation'];
  }

  render () {
    return html`<style>${style.toString()}</style>${template(this)}`;
  }

  closeSidebar () {
    this.dispatchEvent(new CustomEvent('close-sidebar'));
  }
}

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
