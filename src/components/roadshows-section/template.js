import { html } from '@littleq/element-lite/lib/lit-html/lib/lit-extended.js';

const template = (self) => html`
  <section class="section scrolling-wrapper">

    <div class="roadshow">
      <div class="roadshow__logo">I/O Extended</div>
      <h2 class="roadshow__location">Live Viewing Party</h2>
      <span class="roadshow__date">May 7-8,2019</span>
      <button class="roadshow__registerBtn">Register</button>
    </div>

    <div class="roadshow">
      <div class="roadshow__logo">I/O Extended</div>
      <h2 class="roadshow__location">Pampanga</h2>
      <span class="roadshow__date">July 6, 2019</span>
      <button class="roadshow__registerBtn">Register</button>
    </div>

  <div class="roadshow">
    <div class="roadshow__logo">I/O Extended</div>
    <h2 class="roadshow__location">Bonifacio Global City</h2>
    <span class="roadshow__date">July 13, 2019</span>
    <button class="roadshow__registerBtn">Register</button>
  </div>

  <div class="roadshow">
    <div class="roadshow__logo">I/O Extended</div>
    <h2 class="roadshow__location">Makati</h2>
    <span class="roadshow__date">July 20, 2019</span>
    <button class="roadshow__registerBtn">Register</button>
  </div>

    <div class="scrolling-wrapper__extra-space">.</div>
  </section>
`;

export { template };
