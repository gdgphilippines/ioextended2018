import { html } from '@littleq/element-lite/lib/lit-html/lib/lit-extended.js';

const template = (self) => html`
  <div class="banner-img-container">
    <lazy-picture
        class="banner-img"
        thumbnail="${self.thumbnail}"
        src="${self.src}"
        srcset="${self.srcset}"
        sizes="${self.sizes}"
        sources="${self.sources}"
        alt="${self.alt}"
        cover>
    </lazy-picture>
  </div>
  <lazy-picture class="header_asset asset"
      src="/assets/images/header_asset.svg">
  </lazy-picture>
  <div class="banner-title-container">
    <div class="banner-title">
      <slot></slot>
    </div>
  </div>

  <h1>HELLO WORLD</h1>
`;

export { template };
