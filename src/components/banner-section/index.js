import { ElementLiteLit, html } from '@littleq/element-lite';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements } = window;

class Component extends ElementLiteLit(HTMLElement) {
  static get is () { return 'banner-section'; }

  constructor () {
    super();
    this.__data = {};
  }

  set img (img) {
    this.__data['img'] = img;
    this.invalidate();
  }

  get img () {
    return this.__data['img'];
  }

  render () {
    return html`<style>${style.toString()}</style>${template(this)}`;
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
