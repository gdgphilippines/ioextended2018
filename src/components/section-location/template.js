import { html } from '@littleq/element-lite';

const template = (self) => html`
  <heading>
    <lazy-picture
        class="google"
        src="/assets/images/google.svg"
        alt="Google">
    </lazy-picture>
    <lazy-picture
        class="io18"
        src="/assets/images/io18.svg"
        alt="I/O 18">
    </lazy-picture>

    <div class="extended">
      <span class="h1">Extended</span>
      <span class="h1">Roadshow</span>
    </div>
  </heading>
  <p class="paragraph icon-container">
    <svg class="icon" viewBox="0 0 24 24">
      <path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />
    </svg>
    <span class="date icon-text">${self.date}</span>
  </p>
  <p class="paragraph icon-container">
    <svg class="icon" viewBox="0 0 24 24">
      <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
    </svg>
    <span class="location icon-text">${self.location}</span>
  </p>
  ${self.registerLink ? html`
    <a class="button" target="_blank" rel="noopener" href="${self.registerLink}">
      Register
    </a>
    ${self.registerDisable ? html`
      <p class="register">
        Registration is now closed
      </p>
    ` : ''}
  ` : ''}
`;

export { template };
