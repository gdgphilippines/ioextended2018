import { html } from '@littleq/element-lite/lib/lit-html/lib/lit-extended.js';

const template = (self) => html`
  <div class="banner-img-container">
  </div>
  <div class="banner-title-container">
    <div class="banner-title">
      <slot></slot>
    </div>
  </div>
`;

export { template };
