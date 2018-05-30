import { ElementLiteLit, html } from '@littleq/element-lite';
import { template } from './template.js';
import style from './style.styl';
import '../../smart-components/navigation-loader/index.js';
import '../../components/header-navigation/index.js';
const { HTMLElement, customElements } = window;

class Page extends ElementLiteLit(HTMLElement) {
  static get is () { return 'project-header'; }

  render () {
    return html`<style>${style.toString()}</style>${template(this)}`;
  }

  async openSidebar () {
    await import('../project-sidebar/index.js');
    const sidebar = document.querySelector('project-sidebar');
    setTimeout(() => sidebar.open(), 50);
  }

  async closeSidebar () {
    await import('../project-sidebar/index.js');
    const sidebar = document.querySelector('project-sidebar');
    sidebar.close();
  }
}

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
