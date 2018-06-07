import { ElementLiteLit, html, prepareShadyCSS } from '@littleq/element-lite/element-lite-lit.js';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements } = window;

class Component extends ElementLiteLit(HTMLElement, style.toString()) {
  static get is () { return 'snackbar-lite'; }

  constructor () {
    super();
    this.__data = {
      timeout: 5000,
      auto: true
    };
    this.__timeout = null;
  }

  render () {
    return html`<style>${style.toString()}</style>${template(this)}`;
  }

  set auto (auto) {
    this.__data['auto'] = auto;
  }

  get auto () {
    return this.__data['auto'];
  }

  set timeout (timeout) {
    this.__data['timeout'] = timeout;
  }

  get timeout () {
    return this.__data['timeout'];
  }

  show () {
    const snackbar = this.shadowRoot.querySelector('.snackbar');
    if (this.__timeout) {
      clearTimeout(this.__timeout);
      this.__timeout = null;
      snackbar.classList.remove('show');
    }
    snackbar.classList.remove('close');
    snackbar.classList.add('show');
    if (this.auto) {
      this.__timeout = setTimeout(() => {
        this.__timeout = null;
        this.close();
      }, this.timeout);
    }
  }

  close () {
    const snackbar = this.shadowRoot.querySelector('.snackbar');
    snackbar.classList.add('close');
    setTimeout(() => {
      snackbar.classList.remove('show');
      snackbar.classList.remove('close');
    }, 500);
  }
}

if (window.ShadyCSS) prepareShadyCSS(style.toString(), Component.is);

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
