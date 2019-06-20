import { ElementLiteLit, html, prepareShadyCSS } from '@littleq/element-lite/element-lite-lit.js';
import { updateState } from '../../utils/ui-state.js';
import { PageMixin } from '../../mixins/page-mixin/index.js';
import { template } from './template.js';
import style from './style.styl';
import '../../components/banner-section/index.js';
import '../../components/general-section/index.js';
import '../../components/footer-section/index.js';
import '../../components/mark-lite/index.js';
import '../../components/lazy-picture/index.js';
import '../../components/about-section/index.js';
import '../../components/roadshows-section/index.js';
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
    const location = this.location;
    this.fetchAboutGoogleIO(location);
    this.fetchUpcomingRoadshow(location);
    this.fetchWhatToExpect(location);
    this.fetchLanding(location);
    this.fetchSponsors(location);
    this.fetchRoadshow(location);
    if (window.gtag) {
      window.gtag('config', window.gaId, {
        'page_title': 'Homepage',
        'page_path': '/'
      });
    }
  }

  async fetchAboutGoogleIO (location) {
    this.aboutGoogleIO = await fetch(`${location}/data/about-google-io.md`).then(result => result.text());
  }

  async fetchUpcomingRoadshow (location) {
    this.upcomingRoadshow = await fetch(`${location}/data/upcoming-roadshow.md`).then(result => result.text());
  }

  async fetchWhatToExpect (location) {
    this.whatToExpect = await fetch(`${location}/data/what-to-expect.md`).then(result => result.text());
  }

  async fetchSponsors (location) {
    this.sponsors = await fetch(`${location}/data/sponsors.json`).then(result => result.json());
  }

  async fetchRoadshow (location) {
    this.roadshow = await fetch(`${location}/data/roadshows.json`).then(result => result.json());
  }

  async fetchLanding (location) {
    this.landing = await fetch(`${location}/data/landing.json`).then(result => result.json());
  }

  set aboutGoogleIO (aboutGoogleIO) {
    this.__data['aboutGoogleIO'] = aboutGoogleIO;
    this.invalidate();
  }

  get aboutGoogleIO () {
    updateState('currentProgress', 'loaded');
    return this.__data['aboutGoogleIO'];
  }

  set upcomingRoadshow (upcomingRoadshow) {
    this.__data['upcomingRoadshow'] = upcomingRoadshow;
    this.invalidate();
  }

  get upcomingRoadshow () {
    updateState('currentProgress', 'loaded');
    return this.__data['upcomingRoadshow'];
  }

  set whatToExpect (whatToExpect) {
    this.__data['whatToExpect'] = whatToExpect;
    this.invalidate();
  }

  get whatToExpect () {
    updateState('currentProgress', 'loaded');
    return this.__data['whatToExpect'];
  }

  set sponsors (sponsors) {
    this.__data['sponsors'] = sponsors;
    this.invalidate();
  }

  get sponsors () {
    return this.__data['sponsors'];
  }

  set roadshow (roadshow) {
    this.__data['roadshow'] = roadshow;
    this.invalidate();
  }

  get roadshow () {
    return this.__data['roadshow'];
  }

  set landing (landing) {
    this.__data['landing'] = landing;
    this.invalidate();
  }

  get landing () {
    updateState('currentProgress', 'loaded');
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
