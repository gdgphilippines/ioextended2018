import { html } from '@littleq/element-lite';

// <img class="thumbnail" src$="${self.thumbnail}">
// <img class="img" src$="${self.src}" alt$="${self.alt}" srcset$="${self.srcset}">

const template = (self) => html`
  <picture>
    ${self.sources.map(item => html`
      <source srcset$="${item.srcset}" type$="${item.type}" media$="${item.media}">
    `)}
  </picture>
`;

export { template };
