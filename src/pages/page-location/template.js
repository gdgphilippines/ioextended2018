import { html } from '@littleq/element-lite';

const template = (self) => html`
  <header>
    <banner-section img="${'/assets/images/banner.jpg'}">
      <h1 class="h1">
        Bringing you the IO Experience, one city at a time
      </h1>
    </banner-section>
  </header>
  <main class="main" role="main">
    <section-location 
        date="${self.data.date}" 
        location="${self.data.location}"
        registerLink="${self.data.registrationLink}"
        registerDisable="${self.data.registrationClosed}">
    </section-location>
  </main>
  <footer-section>
  </footer-section>
`;

export { template };
