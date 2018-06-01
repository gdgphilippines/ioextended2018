import { ElementLiteLit, html } from '@littleq/element-lite';
import { template } from './template.js';
import style from './style.styl';
import '../../components/banner-section/index.js';
import '../../components/general-section/index.js';
import '../../components/footer-section/index.js';
import '../../components/section-location/index.js';
import '../../components/mark-lite/index.js';
const { HTMLElement, customElements, fetch } = window;

class Page extends ElementLiteLit(HTMLElement) {
  static get is () { return 'page-home'; }

  constructor () {
    super();
    this.__data = {};
  }

  connectedCallback () {
    super.connectedCallback();
    const location = window.location.hostname === 'localhost' ? '' : 'https://raw.githubusercontent.com/gdgphilippines/ioextended2018/master';
    this.fetchAbout(location);
  }

  async fetchAbout (location) {
    this.about = await fetch(`${location}/data/about.md`).then(result => result.text());
  }

  set about (about) {
    this.__data['about'] = about;
    this.invalidate();
  }

  get about () {
    return this.__data['about'];
  }

  render () {
    return html`<style>${style.toString()}</style>${template(this)}`;
  }
}

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
