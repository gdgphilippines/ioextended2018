import { ElementLiteLit, html, prepareShadyCSS } from '@littleq/element-lite/element-lite-lit.js';
import { template } from './template.js';
import style from './style.styl';
import '../../smart-components/navigation-loader/index.js';
import '../../components/side-navigation/index.js';
const { HTMLElement, customElements } = window;

class Component extends ElementLiteLit(HTMLElement, style.toString()) {
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

if (window.ShadyCSS) prepareShadyCSS(style.toString(), Component.is);

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
