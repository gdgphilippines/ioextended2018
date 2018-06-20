import { ElementLiteLit, html, prepareShadyCSS } from '@littleq/element-lite/element-lite-lit.js';
import { subscribe, unsubscribe } from '../../utils/ui-state.js';
import { PageMixin } from '../../mixins/page-mixin/index.js';
import { template } from './template.js';
import style from './style.styl';
import '../../components/banner-section/index.js';
import '../../components/general-section/index.js';
import '../../components/footer-section/index.js';
import '../../components/section-location/index.js';
import '../../components/schedule-topic/index.js';
const { HTMLElement, customElements, fetch } = window;

class Page extends PageMixin(ElementLiteLit(HTMLElement, style.toString())) {
  static get is () { return 'page-location'; }

  constructor () {
    super();
    this.__data = {
      data: {
        date: 'Loading...',
        location: 'Loading...',
        banner: {
          source: []
        },
        schedule: []
      }
    };
    this.location = window.location.hostname === 'localhost' ? '' : 'https://raw.githubusercontent.com/gdgphilippines/ioextended2018/master';
    this.__boundFetchPageData = this.fetchPageData.bind(this);
  }

  connectedCallback () {
    super.connectedCallback();
    subscribe('routeParamObject', this.__boundFetchPageData);

  }

  disconnectedCallback () {
    if (super.disconnectedCallback) super.disconnectedCallback();
    unsubscribe('routeParamObject', this.__boundFetchPageData);
  }

  async fetchPageData ({ id }) {
    if (window.gtag) {
      window.gtag('config', window.gaId, {'page_path': '/location/' + id});
    }
    const location = this.location;
    if (id) {
      this.data = await fetch(`${location}/data/locations/${id}.json`).then(result => result.json());
      this.locationId = id;
    };
  }

  set locationId (id) {
    this.__data['locationId'] = id;
    this.invalidate();
  }

  get locationId () {
    return this.__data['locationId'];
  }

  set data (data) {
    this.__data['data'] = data;
    this.invalidate();
  }

  get data () {
    return this.__data['data'];
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
