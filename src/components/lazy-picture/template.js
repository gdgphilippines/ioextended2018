import { html } from '@littleq/element-lite';

// <img class="bitmap" src$="${self.bitmap}">
// <img class="img" src$="${self.src}" alt$="${self.alt}" srcset$="${self.srcset}">

const template = (self) => html`
  <picture>
    ${self.sources.map(item => html`
      <source srcset$="${item.srcset}" type$="${item.type}" media$="${item.media}">
    `)}
  </picture>
`;

export { template };
