import { ElementLiteLit, html } from '@littleq/element-lite';
import { template } from './template.js';
import style from './style.styl';
import '../lazy-picture/index.js';
const { HTMLElement, customElements } = window;

class Component extends ElementLiteLit(HTMLElement) {
  static get is () { return 'banner-section'; }

  constructor () {
    super();
    this.__data = {
      bitmap: '',
      src: '',
      srcset: '',
      sizes: '',
      alt: '',
      sources: []
    };
  }

  set bitmap (bitmap) {
    this.__data['bitmap'] = bitmap;
    this.invalidate();
  }

  get bitmap () {
    return this.__data['bitmap'];
  }

  set src (src) {
    this.__data['src'] = src;
    this.invalidate();
  }

  get src () {
    return this.__data['src'];
  }

  set alt (alt) {
    this.__data['alt'] = alt;
    this.invalidate();
  }

  get alt () {
    return this.__data['alt'];
  }

  set srcset (srcset) {
    this.__data['srcset'] = srcset;
    this.invalidate();
  }

  get srcset () {
    return this.__data['srcset'];
  }

  set sizes (sizes) {
    this.__data['sizes'] = sizes;
    this.invalidate();
  }

  get sizes () {
    return this.__data['sizes'];
  }

  set sources (sources) {
    this.__data['sources'] = sources;
    this.invalidate();
  }

  get sources () {
    return this.__data['sources'];
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
