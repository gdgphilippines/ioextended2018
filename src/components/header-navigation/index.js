import { ElementLiteLit, html, prepareShadyCSS } from '@littleq/element-lite/element-lite-lit.js';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements } = window;

class Component extends ElementLiteLit(HTMLElement, style.toString()) {
  static get is () { return 'header-navigation'; }

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
}

if (window.ShadyCSS) prepareShadyCSS(style.toString(), Component.is);

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
