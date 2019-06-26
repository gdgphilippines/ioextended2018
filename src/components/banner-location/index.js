import { ElementLiteLit, html, prepareShadyCSS } from '@littleq/element-lite/element-lite-lit.js';
import { template } from './template.js';
import style from './style.styl';
import '../lazy-picture/index.js';
const { HTMLElement, customElements } = window;

class Component extends ElementLiteLit(HTMLElement, style.toString()) {
  static get is () { return 'banner-location'; }

  constructor () {
    super();
    this.__data = {
      thumbnail: '',
      src: '',
      srcset: '',
      sizes: '',
      alt: '',
      sources: []
    };
  }

  set thumbnail (thumbnail) {
    if (this.baseLocation && thumbnail && thumbnail.indexOf(this.baseLocation) !== 0) {
      thumbnail = this.baseLocation + thumbnail;
    }
    this.__data['thumbnail'] = thumbnail;
    this.invalidate();
  }

  get thumbnail () {
    return this.__data['thumbnail'];
  }

  set src (src) {
    if (this.baseLocation && src && src.indexOf(this.baseLocation) !== 0) {
      src = this.baseLocation + src;
    }
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
    if (this.baseLocation) {
      for (let i in sources) {
        if (sources[i].srcset && sources[i].srcset.indexOf(this.baseLocation) !== 0) {
          sources[i].srcset = this.baseLocation + sources[i].srcset;
        }
      }
    }
    this.__data['sources'] = sources;
    this.invalidate();
  }

  get sources () {
    return this.__data['sources'];
  }

  set baseLocation (baseLocation) {

    this.__data['baseLocation'] = baseLocation;

    if (this.__data['src'] && this.__data['src'].indexOf(baseLocation) !== 0) {
      this.__data['src'] = baseLocation + this.__data['src'];
    }

    if (this.__data['thumbnail'] && this.__data['thumbnail'].indexOf(baseLocation) !== 0) {
      this.__data['thumbnail'] = baseLocation + this.__data['thumbnail'];
    }

    for (let i in this.__data['sources']) {
      if (this.__data['sources'][i].srcset && this.__data['sources'][i].srcset.indexOf(baseLocation) !== 0) {
        this.__data['sources'][i].srcset = baseLocation + this.__data['sources'][i].srcset;
      }
    }

    this.invalidate();
  }

  get baseLocation () {
    return this.__data['baseLocation'];
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
