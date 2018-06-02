import { ElementLiteLit, html } from '@littleq/element-lite';
import { PageMixin } from '../../mixins/page-mixin/index.js';
import { template } from './template.js';
import style from './style.styl';
import '../../components/banner-section/index.js';
import '../../components/general-section/index.js';
import '../../components/footer-section/index.js';
import '../../components/section-location/index.js';
import '../../components/mark-lite/index.js';
const { HTMLElement, customElements, fetch } = window;

class Page extends PageMixin(ElementLiteLit(HTMLElement)) {
  static get is () { return 'page-home'; }

  constructor () {
    super();
    this.__data = {
      landing: {
        date: 'Loading...',
        location: 'Loading...',
        banner: {
          source: []
        }
      }
    };
  }

  connectedCallback () {
    super.connectedCallback();
    const location = window.location.hostname === 'localhost' ? '' : 'https://raw.githubusercontent.com/gdgphilippines/ioextended2018/master';
    this.fetchAbout(location);
    this.fetchLanding(location);
  }

  async fetchAbout (location) {
    this.about = await fetch(`${location}/data/about.md`).then(result => result.text());
  }

  async fetchLanding (location) {
    this.landing = await fetch(`${location}/data/landing.json`).then(result => result.json());
  }

  set about (about) {
    this.__data['about'] = about;
    this.invalidate();
  }

  get about () {
    return this.__data['about'];
  }

  set landing (landing) {
    this.__data['landing'] = landing;
    this.invalidate();
  }

  get landing () {
    return this.__data['landing'];
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
