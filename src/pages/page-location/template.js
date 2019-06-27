import { html } from '@littleq/element-lite/lib/lit-html/lib/lit-extended.js';

const template = (self) => html`
  <header>
    <div class="header">
      <lazy-picture src="/assets/images/IO_Extended_logo.svg" style="position: absolute; left: 5rem; top: 14rem"></lazy-picture>
      <h1 class="h1" style="positon: absolute; margin-top:0; padding-top: 12rem; margin-bottom:2rem">${self.data.short_name}</h1>
      <p class="h">
        <lazy-picture src="/assets/images/calendar_icon.svg"></lazy-picture>
        ${self.data.date}
      </p>
      <p class="h">
        <lazy-picture src="/assets/images/location_icon.svg"></lazy-picture>
        ${self.data.location}
      </p>

      <a class="regButton" href="${self.data.registrationLink}">Register</a>
    </div>
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
