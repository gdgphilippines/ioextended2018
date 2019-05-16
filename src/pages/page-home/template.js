import { html } from '@littleq/element-lite/lib/lit-html/lib/lit-extended.js';

const template = (self) => html`
  <header>
    <banner-section
        class="banner"
        baseLocation="${self.location}"
        thumbnail="${self.landing.banner.bitmap}"
        src="${self.landing.banner.src}"
        srcset="${self.landing.banner.srcset}"
        alt="${self.landing.banner.alt}"
        sources="${self.landing.banner.source}">
      <h1 class="h1">
        Bringing you the IO Experience,
        one city at a time
      </h1>
    </banner-section>
  </header>
  <main class="main" role="main">
    <general-section>
      <about-section>
        <mark-lite class="section-text" text="${self.aboutGoogleIO}"></mark-lite>
      </about-section>
      <mark-lite class="section-text" text="${self.upcomingRoadshow}"></mark-lite>
      <roadshows-section></roadshows-section>
      <mark-lite class="section-text" text="${self.whatToExpect}"></mark-lite>
    </general-section>
    <general-section class="sponsor">
      <div class="section-text">
        <h1>
          Sponsor
        </h1>
        ${self.sponsors.map(sponsorGroup => html`
          <section class="sponsor-group">
            <h2 class="h2">
              ${sponsorGroup.group}
            </h2>
            <div class="sponsors">
              ${sponsorGroup.sponsors.map(sponsor => html`
                <a class="sponsor-anchor" href="${sponsor.href}" title="${sponsor.alt}" target="_blank" rel="noopener">
                  <lazy-picture
                      class="sponsor-image"
                      src="${self.location}${sponsor.src}"
                      alt="${sponsor.alt}">
                  </lazy-picture>
                </a>
              `)}
            </div>
          </section>
        `)}
      </div>
    </general-section>
  </main>
  <footer-section>
  </footer-section>
`;

export { template };
