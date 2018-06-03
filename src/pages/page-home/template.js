import { html } from '@littleq/element-lite';

const template = (self) => html`
  <header>
    <banner-section
        class="banner"
        bitmap="${self.landing.banner.bitmap}"
        src="${self.landing.banner.src}"
        srcset="${self.landing.banner.srcset}"
        alt="${self.landing.banner.alt}"
        sources="${self.landing.banner.source}">
      <h1 class="h1">
        Bringing you the IO Experience, one city at a time
      </h1>
    </banner-section>
  </header>
  <main class="main" role="main">
    <section-location date="${self.landing.date}" location="${self.landing.location}"></section-location>
    <general-section>
      <mark-lite class="section-text" text="${self.about}"></mark-lite>
    </general-section>
    ${ false ? `
      <banner-section img="${'/assets/images/pix.jpg'}">
        <h1 class="h1">
          What happened last year? <a class="button" href="" target="_blank" rel="noopener">View Photos</a>
        </h1>
      </banner-section>
    ` : ''}
    ${ false ? `
      <general-section class="sponsor">
        <div class="section-text">
          <h1>
            Sponsor <a class="button" href="" target="_blank" rel="noopener">Be a Sponsor</a>
          </h1>
        </div>
      </general-section>
    ` : ''}
  </main>
  <footer-section>
  </footer-section>
`;

export { template };
