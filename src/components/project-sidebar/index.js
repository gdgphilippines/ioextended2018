import { ElementLiteLit, html } from '@littleq/element-lite';
import { template } from './template.js';
import style from './style.styl';
import '../../smart-components/navigation-loader/index.js';
import '../../components/side-navigation/index.js';
const { HTMLElement, customElements } = window;

class Page extends ElementLiteLit(HTMLElement) {
  static get is () { return 'project-sidebar'; }

  constructor () {
    super();
    this.__open = false;
  }

  render () {
    return html`<style>${style.toString()}</style>${template(this)}`;
  }

  open () {
    const sidebar = this.shadowRoot.querySelector('.sidebar');
    this.__open = true;
    sidebar.classList.add('open');
  }

  close () {
    const sidebar = this.shadowRoot.querySelector('.sidebar');
    this.__open = false;
    sidebar.classList.remove('open');
  }
}

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
