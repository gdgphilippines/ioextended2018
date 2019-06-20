import { html } from '@littleq/element-lite/lib/lit-html/lib/lit-extended.js';

const template = (self) => html`

  <section class="section scrolling-wrapper">
    ${this.roadshows.map(item => html`
      <div class="roadshow">
        <div class="roadshow__logo">I/O Extended</div>
        <h2 class="roadshow__location">${item.location}</h2>
        <span class="roadshow__date">${item.date}</span>
        <button onclick="window.location.replace('${item.url}')" class="roadshow__registerBtn">Register</button>
      </div>
    `)}
  </section>

`;

export { template };
