import { ElementLiteStatic } from '@littleq/element-lite/element-lite-static.js';
const { HTMLElement, customElements } = window;

class Component extends ElementLiteStatic(HTMLElement) {
  static get is () { return 'navigation-loader'; }

  static get properties () {
    return {
      navigation: {
        type: Array,
        observer: '_setNavigation',
        value: [
          {
            label: 'Cavite',
            href: '/location/cavite'
          },
          {
            label: 'Manila',
            href: '/location/manila'
          },
          {
            label: 'Pampanga',
            href: '/location/pampanga'
          },
          {
            label: 'Palawan',
            href: '/location/palawan'
          },
          {
            label: 'Albay',
            href: '/location/albay'
          },
          {
            label: 'Naga',
            href: '/location/naga'
          }
        ]
      }
    };
  }

  render () {
    return `<slot></slot>`;
  }

  _setNavigation (navigation) {
    const navComponent = this.querySelector('header-navigation') || this.querySelector('side-navigation');
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
