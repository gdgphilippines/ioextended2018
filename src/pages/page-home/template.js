import { html } from '@littleq/element-lite';

const template = (self) => html`
  <banner-section img="${'/assets/images/banner.jpg'}">
    <h1 class="h1">
      Bringing you the IO Experience, one city at a time
    </h1>
  </banner-section>
  <main class="main" role="main">
    <section-location date="${'June - August 2018'}" location="${'Cavite, Manila, Pampanga, Palawan, Albay, and Naga'}"></section-location>

  </main>
`;

export { template };
