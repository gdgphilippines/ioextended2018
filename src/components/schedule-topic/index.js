import { ElementLiteLit, html, prepareShadyCSS } from '@littleq/element-lite/element-lite-lit.js';
import { updateState } from '../../utils/ui-state.js';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements, fetch } = window;

class Component extends ElementLiteLit(HTMLElement, style.toString()) {
  static get is () { return 'schedule-topic'; }

  constructor () {
    super();
    this.__data = {};
    this.showModal = function (name, affiliation, bio) {
      // Dialog
      var myDialog = document.createElement('dialog');
      myDialog.style.border = 'none';
      myDialog.style.borderRadius = '8px';
      myDialog.style.maxWidth = '50rem';
      document.body.appendChild(myDialog);

      // Wrapper
      var wrapper = document.createElement('div');
      wrapper.style = 'display: flex; flex-direction: column; align-items: center';
      myDialog.appendChild(wrapper);

      // Close
      var closebtn = document.createElement('button');
      closebtn.innerText = 'Close';
      closebtn.value = 'cancel';
      closebtn.style = `
        align-self: flex-end;
        background-color: transparent;
        padding: 0.75rem 1.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        outline: none;
      `;
      closebtn.onclick = () => {
        myDialog.close();
        document.body.removeChild(myDialog);
      };
      wrapper.appendChild(closebtn);

      // Name
      var nameElement = document.createElement('h1');
      nameElement.style = `
        font-family: 'Product Sans';
        font-size: 2.5rem;
        font-weight: normal;
        margin-bottom: 0;
        color: #555;
        
      `;
      nameElement.innerText = name;

      wrapper.appendChild(nameElement);

      var affElement = document.createElement('h2');
      affElement.style = `
        font-family: 'Product Sans';
        font-size: 2rem;
        font-weight: normal;
        margin-top: 0;
        color: gray;
      `;
      affElement.innerText = affiliation;
      wrapper.appendChild(affElement);

      var bioElement = document.createElement('p');
      bioElement.style = `
        font-family: 'Product Sans';
        font-size: 1.65rem;
        margin: 1rem 2rem;
        line-height: 2.25rem;
        font-weight: normal;
        color: #555;
      `;
      bioElement.innerText = bio;

      wrapper.appendChild(bioElement);

      myDialog.showModal();
    };
  }

  set codelabs (codelabs) {
    this.__data['codelabs'] = codelabs;
    updateState('currentProgress', 'loaded');
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

  set bio (bio) {
    this.__data['bio'] = bio;
    this.invalidate();
  }

  get bio () {
    return this.__data['bio'];
  }

  get affiliation () {
    return this.__data['affiliation'];
  }

  set affiliation (affiliation) {
    this.__data['affiliation'] = affiliation;
    this.invalidate();
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
      const { title, speaker } = await fetch(`${location}/data/${type}/${id}.json`).then(result => result.json());
      this.title = title;
      if (speaker) {
        const { name, affiliation, bio } = await fetch(`${location}/data/speakers/${speaker}.json`).then(result => result.json());
        this.speaker = name;
        this.affiliation = affiliation.join(' | ');
        this.bio = bio;
      }
    }
  }

  render () {
    return html`<style>${style.toString()}</style>${template(this)}`;
  }
}

if (window.ShadyCSS) prepareShadyCSS(style.toString(), Component.is);

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
