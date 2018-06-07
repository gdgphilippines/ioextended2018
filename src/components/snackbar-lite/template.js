import { html } from '@littleq/element-lite/lib/lit-html/lib/lit-extended.js';

const template = (self) => html`
  <div class="snackbar">
    <slot></slot>
  </div>
`;

export { template };
