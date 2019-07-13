import { html } from '@littleq/element-lite/lib/lit-html/lib/lit-extended.js';

const template = (self) => html`
  <aside class="sidebar">
    <h1 class="title">
      <a class="logo-anchor" href="/">
        <img class="logo" alt="I/O 18 Logo" src="/assets/images/io19.svg">
      </a>
    </h1>
    <div class="spacer">
    </div>
    <navigation-loader>
      <side-navigation on-close-sidebar=${self.close.bind(self)}>
      </side-navigation>
    </navigation-loader>
  </aside>
`;

export { template };
