import { ElementLiteLit, html, prepareShadyCSS } from '@littleq/element-lite/element-lite-lit.js';
import { subscribe, unsubscribe } from '../../utils/ui-state.js';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements, CustomEvent } = window;

class Component extends ElementLiteLit(HTMLElement, style.toString()) {
  static get is () { return 'side-navigation'; }

  constructor () {
    super();
    this.__data = {};
    this.__boundSetActive = this._setActive.bind(this);
  }

  connectedCallback () {
    super.connectedCallback();
    subscribe('routeParamObject', this.__boundSetActive);
  }

  disconnectedCallback () {
    if (super.disconnectedCallback) super.disconnectedCallback();
    unsubscribe('routeParamObject', this.__boundSetActive);
  }

  set navigation (navigation) {
    this.__data['navigation'] = navigation;
    this.invalidate();
  }

  get navigation () {
    return this.__data['navigation'];
  }

  set locationId (id) {
    this.__data['locationId'] = id;
    this.invalidate();
  }

  get locationId () {
    return this.__data['locationId'];
  }

  render () {
    return html`<style>${style.toString()}</style>${template(this)}`;
  }

  closeSidebar () {
    this.dispatchEvent(new CustomEvent('close-sidebar'));
  }

  _setActive ({ id }) {
    this.locationId = id;
  }
}

if (window.ShadyCSS) prepareShadyCSS(style.toString(), Component.is);

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
