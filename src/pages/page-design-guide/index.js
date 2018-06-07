import { ElementLiteLit, html, prepareShadyCSS } from '@littleq/element-lite/element-lite-lit.js';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements } = window;

class Page extends ElementLiteLit(HTMLElement, style.toString()) {
  static get is () { return 'page-design-guide'; }

  render () {
    return html`<style>${style.toString()}</style>${template(this)}`;
  }
}

if (window.ShadyCSS) prepareShadyCSS(style.toString(), Page.is);

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
