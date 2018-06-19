import { ElementLiteLit, html, prepareShadyCSS } from '@littleq/element-lite/element-lite-lit.js';
import { subscribe, unsubscribe } from '../../utils/ui-state.js';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements } = window;

class Component extends ElementLiteLit(HTMLElement, style.toString()) {
  static get is () { return 'progress-bar'; }
  constructor () {
    super();
    this.__boundSetActive = this._setActive.bind(this);
  }

  connectedCallback () {
    super.connectedCallback();
    subscribe('currentProgress', this.__boundSetActive);
    subscribe('routeParamObject', this.__boundSetActive);
  }

  disconnectedCallback () {
    if (super.disconnectedCallback) super.disconnectedCallback();
    unsubscribe('currentProgress', this.__boundSetActive);
    subscribe('routeParamObject', this.__boundSetActive);
  }

  _setActive (progress) {
      this._progress = this.shadowRoot.querySelector('.progress-bar-container > .progress-bar')
      return (progress === 'loaded') ? this._hide() : this._show()
  }

  _show () {
    this._progress.classList.remove('done')
  }

  _hide () {
    setTimeout(() => {
        this._progress.classList.add('done')
    },1100)
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
