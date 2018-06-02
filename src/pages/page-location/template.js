import { html } from '@littleq/element-lite';

const template = (self) => html`
  <header>
    <banner-section
        class="banner"
        bitmap="${self.data.banner.bitmap}"
        src="${self.data.banner.src}"
        srcset="${self.data.banner.srcset}"
        alt="${self.data.banner.alt}"
        sources="${self.data.banner.source}">
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

    <general-section class="sponsor">
      <div class="section-text">
        <h1>
          Schedule
        </h1>

        <ul class="schedule">
          ${self.data.schedule.map(item => html`
            <li class="schedule-item">
              <div class="time">
                ${item.time}
              </div>
              <schedule-topic
                  class="schedule-topic"
                  title="${item.title}"
                  session="${item.session}"
                  codelabs="${item.codelabs}">
              </schedule-topic>
            </li>
          `)}
        </div>
      </div>
    </general-section>


  </main>
  <footer-section>
  </footer-section>
`;

export { template };
