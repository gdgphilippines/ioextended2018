import { html } from '@littleq/element-lite';

const template = (self) => html`
  <div class="banner-img-container">
    <lazy-picture
        class="banner-img"
        bitmap="${self.bitmap}"
        src="${self.src}"
        srcset="${self.srcset}"
        sizes="${self.sizes}"
        sources="${self.sources}"
        alt="${self.alt}"
        cover>
    </lazy-picture>
  </div>
  <div class="banner-title-container">
    <div class="banner-title">
      <slot></slot>
    </div>
    <div class="banner-dots"></div>
  </div>
`;

export { template };
