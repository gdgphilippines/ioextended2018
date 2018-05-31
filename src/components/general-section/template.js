import { html } from '@littleq/element-lite';

const template = (self) => html`
  <section class="section">
    <div class="accent"></div>
    <slot></slot>
  </section>
`;

export { template };
