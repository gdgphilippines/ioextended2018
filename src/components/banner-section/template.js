import { html } from '@littleq/element-lite';

const template = (self) => html`
  <div class="banner-img" style$="background-image: url('${self.img}')">
  </div>
  <div class="banner-title-container">
    <div class="banner-title">
      <slot></slot>
    </div>
    <div class="banner-dots"></div>
  </div>
`;

export { template };
