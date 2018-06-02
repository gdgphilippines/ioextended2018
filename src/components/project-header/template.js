import { html } from '@littleq/element-lite';

const template = (self) => html`
  <header class="header">
    <button class="button mobile-only" on-click=${self.openSidebar}>
      <svg class="icon" viewBox="0 0 24 24">
        <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>
    </button>
    <h1 class="title">
      <a class="logo-anchor" href="/">
        <img class="logo" alt="I/O 18 Logo" src="/assets/images/io18-2.svg">
      </a>
    </h1>
    <div class="spacer">
    </div>
    <navigation-loader>
      <header-navigation class="not-mobile">
      </header-navigation>
    </navigation-loader>
  </header>
`;

export { template };
