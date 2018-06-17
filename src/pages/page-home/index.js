import { ElementLiteLit, html, prepareShadyCSS } from '@littleq/element-lite/element-lite-lit.js';
import { PageMixin } from '../../mixins/page-mixin/index.js';
import { template } from './template.js';
import style from './style.styl';
import '../../components/banner-section/index.js';
import '../../components/general-section/index.js';
import '../../components/footer-section/index.js';
import '../../components/section-location/index.js';
import '../../components/mark-lite/index.js';
import '../../components/lazy-picture/index.js';
const { HTMLElement, customElements, fetch } = window;

class Page extends PageMixin(ElementLiteLit(HTMLElement, style.toString())) {
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
      },
      sponsors: []
    };
    this.location = window.location.hostname === 'localhost' ? '' : 'https://raw.githubusercontent.com/gdgphilippines/ioextended2018/master';
  }

  connectedCallback () {
    super.connectedCallback();
    const location = this.location
    this.fetchAbout(location);
    this.fetchLanding(location);
    this.fetchSponsors(location);
  }

  async fetchAbout (location) {
    this.about = await fetch(`${location}/data/about.md`).then(result => result.text());
  }

  async fetchSponsors (location) {
    this.sponsors = await fetch(`${location}/data/sponsors.json`).then(result => result.json());
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

  set sponsors (sponsors) {
    this.__data['sponsors'] = sponsors;
    this.invalidate();
  }

  get sponsors () {
    return this.__data['sponsors'];
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

if (window.ShadyCSS) prepareShadyCSS(style.toString(), Page.is);

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
