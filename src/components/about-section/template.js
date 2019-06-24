import { html } from '@littleq/element-lite/lib/lit-html/lib/lit-extended.js';

const template = (self) => html`
  <section class="section">
    <div class="section-text">
      <h1>About</h1>
      <div class="grid">
        <div class="about__leftSection">
          <lazy-picture
            class="logo"
            src="/assets/images/Google_IO_19_logo.svg"
            alt="Google IO Extended Logo">
          </lazy-picture>
          <lazy-picture class="home_asset"
            class="asset"
            src="/assets/images/home_asset.svg">
          </lazy-picture>
        </div>
        <div>
          <slot></slot>
          <iframe class="keynote-video" width="713" height="401" src="https://www.youtube.com/embed/lyRPyRKHO8M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </section>
`;

export { template };
