const { IntersectionObserver } = window;

export const PageMixin = (superClass) => {
  return class extends superClass {
    constructor () {
      super();
      this.__boundActivateImage = this.__imageActivate.bind(this);
    }

    connectedCallback () {
      if (super.connectedCallback) super.connectedCallback();
      const options = {
        threshold: [0.1, 0.25, 0.75]
      };
      this.__observer = new IntersectionObserver(this.__boundActivateImage, options);
      this.__observer.observe(this.shadowRoot.querySelector('.main'));
    }

    disconnectedCallback () {
      if (super.disconnectedCallback) super.disconnectedCallback();
      if (this.__observer && 'disconnect' in this.__observer) this.__observer.disconnect();
    }

    __imageActivate (entries) {
      if (entries[0].intersectionRatio > 0.1) entries[0].target.style.backgroundImage = 'url(/assets/images/map.svg)';
    }
  };
};
