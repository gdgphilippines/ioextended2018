import { ElementLiteLit, html } from '@littleq/element-lite';
import { template } from './template.js';
import style from './style.styl';
import '../../components/banner-section/index.js';
import '../../components/section-location/index.js';
const { HTMLElement, customElements } = window;

class Page extends ElementLiteLit(HTMLElement) {
  static get is () { return 'page-home'; }

  render () {
    return html`<style>${style.toString()}</style>${template(this)}`;
  }
}

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
