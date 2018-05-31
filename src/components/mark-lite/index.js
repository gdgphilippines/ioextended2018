import marked from 'marked';
const { HTMLElement, customElements } = window;

class Component extends HTMLElement {
  static get is () { return 'mark-lite'; }

  constructor () {
    super();
    this.__data = {};
  }

  set text (text) {
    this.__data['text'] = text;
    this.innerHTML = marked(text);
  }

  get text () {
    return this.__data['text'];
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
