import { ElementLiteLit, html } from '@littleq/element-lite';
import { template } from './template.js';
import style from './style.styl';
import '../lazy-picture/index.js';
const { HTMLElement, customElements } = window;

class Component extends ElementLiteLit(HTMLElement) {
  static get is () { return 'section-location'; }

  constructor () {
    super();
    this.__data = {};
  }

  set date (date) {
    this.__data['date'] = date;
    this.invalidate();
  }

  get date () {
    return this.__data['date'];
  }

  set location (location) {
    this.__data['location'] = location;
    this.invalidate();
  }

  get location () {
    return this.__data['location'];
  }

  set registerLink (registerLink) {
    this.__data['registerLink'] = registerLink;
    this.invalidate();
  }

  get registerLink () {
    return this.__data['registerLink'];
  }

  set registerDisable (registerDisable) {
    this.__data['registerDisable'] = registerDisable;
    this.invalidate();
  }

  get registerDisable () {
    return this.__data['registerDisable'];
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
