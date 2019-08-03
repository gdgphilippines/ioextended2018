import { html } from '@littleq/element-lite/lib/lit-html/lib/lit-extended.js';

const template = (self) => html`
  <h2 class$="h2 ${self.codelabs && self.codelabs.length ? 'with-codelabs' : ''}">
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
    : html`${self.speaker
      ? html`
      <p class="paragraph">
        <span style="${self.bio ? 'cursor: pointer; color: cornflowerblue' : ''}" on-click="${self.bio ? e => self.showModal(self.speaker, self.affiliation, self.bio) : ''}">${self.speaker}</span>
        <br>
        <small>${self.affiliation}</small>
      </p>`
      : ''
    }`
  }
`;

export { template };
