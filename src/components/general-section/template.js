import { html } from '@littleq/element-lite/lib/lit-html/lib/lit-extended.js';

const template = (self) => html`
  <section class="section">
    <slot></slot>
  </section>
`;

export { template };
