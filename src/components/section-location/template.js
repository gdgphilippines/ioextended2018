import { html } from '@littleq/element-lite';

const template = (self) => html`
  <img class="io-img">
  <p class="icon-container">
    <span class="date">${self.date}</span>
  </p>
  <p class="icon-container">
    <span class="location">${self.location}</span>
  </p>
  ${self.registerLink ? html`
    <a class="button" href="${self.registerLink}">
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
