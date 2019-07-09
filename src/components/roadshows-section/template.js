import { html } from '@littleq/element-lite/lib/lit-html/lib/lit-extended.js';

const template = (self) => html`

  <section class="section scrolling-wrapper">
    ${self.roadshow.map(item => html`
      <div class="roadshow">
        <div class="roadshow__logo">I/O Extended</div>
        <h2 class="roadshow__location">${item.location}</h2>
        <span class="roadshow__date">${item.date}</span>
        ${item.allow_registration ? html`<a class="roadshow__registerBtn" href="${item.url}">Register</a>` : html`<a></a>`}
      </div>
    `)}
  </section>

`;

export { template };
