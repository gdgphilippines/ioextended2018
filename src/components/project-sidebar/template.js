import { html } from '@littleq/element-lite';

const template = (self) => html`
  <aside class="sidebar">
    <h1 class="title">
      SPA-lite
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
