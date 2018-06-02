import { ElementLiteLit, html } from '@littleq/element-lite';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements, Event, IntersectionObserver } = window;

class Component extends ElementLiteLit(HTMLElement) {
  static get is () { return 'lazy-picture'; }

  constructor () {
    super();

    this.__data = {
      bitmap: '',
      src: '',
      srcset: '',
      sizes: '',
      sources: []
    };
    this.__boundImageLoaded = this.__imageLoaded.bind(this);
    this.__boundActivateImage = this.__imageActivate.bind(this);
    this.__bitmap = document.createElement('img');
    this.__img = document.createElement('img');
    this.__bitmap.classList.add('bitmap');
    this.__img.classList.add('img');
    this.__img.addEventListener('load', this.__boundImageLoaded);
  }

  connectedCallback () {
    super.connectedCallback();
    const options = {
      threshold: [0.25, 0.75]
    };
    const picture = this.shadowRoot.querySelector('picture');
    this.shadowRoot.insertBefore(this.__bitmap, picture);
    setTimeout(() => {
      this.__observer = new IntersectionObserver(this.__boundActivateImage, options);
      this.__observer.observe(this);
    });
  }

  disconnectedCallback () {
    if (this.__observer && 'disconnect' in this.__observer) this.__observer.disconnect();
  }

  set viewPort (viewPort) {
    this.__data['viewPort'] = viewPort;
    if (viewPort) {

    }
  }

  get viewPort () {
    return this.__data['viewPort'];
  }

  set active (active) {
    this.__data['active'] = typeof active === 'boolean' ? active : (active !== null && active !== undefined);
    if (this.__data['src'] || this.__data['srcset']) this.loadImage();
    if (this.__data['active']) {
      this.setAttribute('active', '');
    } else {
      this.removeAttribute('active');
    }
  }

  get active () {
    return this.__data['active'];
  }

  set bitmap (bitmap) {
    this.__data['bitmap'] = bitmap;
  }

  get bitmap () {
    return this.__data['bitmap'];
  }

  set src (src) {
    this.__data['src'] = src;
    if (this.__data['src']) this.loadImage();
  }

  get src () {
    return this.__data['src'];
  }

  set alt (alt) {
    this.__data['alt'] = alt;
    this.__bitmap.alt = alt;
    this.__img.alt = alt;
  }

  get alt () {
    return this.__data['alt'];
  }

  set srcset (srcset) {
    this.__data['srcset'] = srcset;
    if (this.__data['srcset']) this.loadImage();
  }

  get srcset () {
    return this.__data['srcset'];
  }

  set sizes (sizes) {
    this.__data['sizes'] = sizes;
    this.__img.sizes = sizes;
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

  static get observedAttributes () {
    return ['bitmap', 'src', 'srcset', 'alt'];
  }

  attributeChangedCallback (attr, oldValue, newValue) {
    if (oldValue !== newValue) this[attr] = newValue;
  }

  loadImage () {
    const picture = this.shadowRoot.querySelector('picture');
    const img = picture.querySelector('.img');
    if (this.__data['active']) {
      this.__bitmap.src = this.__data['bitmap'];
      this.__img.src = this.__data['src'];
      this.__img.srcset = this.__data['srcset'];
      if (img && img !== this.__img) picture.removeChild(img);
      setTimeout(() => { picture.appendChild(this.__img) });
    }
  }

  __imageLoaded () {
    const event = new Event('load');
    event.detail = { originalTarget: this.__img };
    this.__bitmap.classList.add('image-loaded');
    this.__img.classList.add('image-img-loaded');
    this.dispatchEvent(event);
  }

  __imageActivate (entries) {
    this.active = entries[0].intersectionRatio > 0.25;
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
