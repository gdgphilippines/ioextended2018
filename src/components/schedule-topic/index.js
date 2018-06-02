import { ElementLiteLit, html } from '@littleq/element-lite';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements, fetch } = window;

class Component extends ElementLiteLit(HTMLElement) {
  static get is () { return 'schedule-topic'; }
  
  constructor () {
    super();
    this.__data = {};
  }
  
  set codelabs (codelabs) {
    this.__data['codelabs'] = codelabs;
    this.invalidate();
  }

  get codelabs () {
    return this.__data['codelabs'];
  }
  
  set speaker (speaker) {
    this.__data['speaker'] = speaker;
    this.invalidate();
  }

  get speaker () {
    return this.__data['speaker'];
  }
  
  set codelab (codelab) {
    this.__data['session'] = codelab;
    this.getSession(codelab, 'codelabs');
  }

  get codelab () {
    return this.__data['session'];
  }
  
  set session (session) {
    this.__data['session'] = session;
    this.getSession(session, 'session');
  }

  get session () {
    return this.__data['session'];
  }

  set title (title) {
    this.__data['title'] = title;
    this.invalidate();
  }

  get title () {
    return this.__data['title'];
  }
  
  async getSession (id, type) {
    const location = window.location.hostname === 'localhost' ? '' : 'https://raw.githubusercontent.com/gdgphilippines/ioextended2018/master';
    if (id) {
      const { title, topic, speaker } = await fetch(`${location}/data/${type}/${id}.json`).then(result => result.json());
      this.title = title;  
      if (speaker) {
        const { name } = await fetch(`${location}/data/speakers/${speaker}.json`).then(result => result.json());  
        this.speaker = name;
      }
    }
    
    
    
    
    
  }

  render () {
    return html`<style>${style.toString()}</style>${template(this)}`;
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
