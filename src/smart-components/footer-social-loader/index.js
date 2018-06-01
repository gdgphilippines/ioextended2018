import { ElementLiteStatic } from '@littleq/element-lite';
const { HTMLElement, customElements } = window;

class Component extends ElementLiteStatic(HTMLElement) {
  static get is () { return 'footer-loader'; }

  static get properties () {
    return {
      navigation: {
        type: Array,
        observer: '_setNavigation',
        value: [
          {
            
          }
        ]
      }
    };
  }

  render () {
    return `<slot></slot>`;
  }

  _setNavigation (navigation) {
    const navComponent = this.querySelector('footer-social');
    if (navComponent) {
      navComponent.navigation = navigation;
    }
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
