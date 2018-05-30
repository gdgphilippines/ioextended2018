import { html } from '@littleq/element-lite';

const template = (self) => html`
  <img class="banner-img" src$="${self.img}">
  <div class="banner-title-container">
    <div class="banner-title">
      <slot></slot>
    </div>
    <div class="banner-dots"></div>
  </div>
`;

export { template };
