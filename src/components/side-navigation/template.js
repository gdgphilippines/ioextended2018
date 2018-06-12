import { html } from '@littleq/element-lite/lib/lit-html/lib/lit-extended.js';

const template = (self) => html`
  <nav class="side-navigation">
    <ul class="side-navigation-list">
      ${self.navigation.map(i => html`
        <li class$="side-navigation-item ${self.locationId === i.label.toLowerCase() ? 'active': ''}" on-click=${self.closeSidebar.bind(self)}>
          <a href="${i.href}" class="side-navigation-anchor">
            ${i.label}
          </a>
        </li>
      `)}
    </ul>
  </nav>
`;

export { template };
