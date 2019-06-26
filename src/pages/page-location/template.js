import { html } from '@littleq/element-lite/lib/lit-html/lib/lit-extended.js';

const template = (self) => html`
  <header>
    <banner-section
        class="banner"
        baseLocation="${self.location}"
        thumbnail="${self.data.banner.bitmap}"
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

    <general-section class="location">
      <div class="section-text">
        <h1>
          Schedule
        </h1>

      <lazy-picture
        class="group43"
        src="/assets/images/Group_43.svg">
      </lazy-picture>


      <lazy-picture
        class="session4"
        src="/assets/images/event_placeholder_session4.svg">
      </lazy-picture>
      <lazy-picture
        class="group52"
        src="/assets/images/Group_52.svg">
      </lazy-picture>

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
