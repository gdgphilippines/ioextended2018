import { html } from '@littleq/element-lite';

const template = (self) => html`
  <h2 class="h2">
    ${self.codelabs && self.codelabs.length ? 'Breakout Sessions / Codelabs' : self.title}
  </h2>
  ${self.codelabs && self.codelabs.length 
    ? html`
      <ul class="codelabs">
        ${self.codelabs.map(item => html`
          <li class="codelab-item">
            <schedule-topic codelab="${item}"></schedule-topic>
          </li>
        `)}
      </ul>
    `
    : html`
      <p class="paragraph">
        ${self.speaker}
      </p>  
    `
  }
`;

export { template };
