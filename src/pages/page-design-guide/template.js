import { html } from '@littleq/element-lite/lib/lit-html/lib/lit-extended.js';

const template = (self) => html`
  <h1 class="h1">Design Guidelines</h1>

  <h2 class="h2">Color Palette</h2>

  <p class="body">
    <span class="block gray-1"></span> Gray 1 #0d0d0d (navigation) <br>
    <span class="block purple"></span> Purple #5b73fd (navigation - current) <br>
    <span class="block white"></span> White #fff (h1) <br>
    <span class="block orange"></span> Orange #ff6c00 (icons) <br>
    <span class="block gray-2"></span> Gray 2 #5b73fd (h2) <br>
    <span class="block teal"></span> Teal #40e6b8 (button - available) <br>
    <span class="block dark-teal"></span> Dark Teal #1b735b (button text - available) <br>
    <span class="block gray-3"></span> Gray 3 #d6d6d6 (button - unavailable) <br>
    <span class="block gray-4"></span> Gray 4 #f9f9f9 (button text - unavailable) <br>
    <span class="block gray-5"></span> Gray 5 #1f1f1f (schedule categories) <br>
    <span class="block gray-6"></span> Gray 6 #9f9f9f (schedule categories separator) <br>
  </p>

  <h2 class="h2"> Typography </h2>

  <p class="body">
    <span class="h1">Header 1</span><br>
    Product Sans, 3.33rem
  </p>

  <p class="body">
    <span class="h2">Header 2</span><br>
    Product Sans, 2.9rem
  </p>

  <p class="body">
    <span class="paragraph">Paragraph</span><br>
    Roboto, 1.6rem, Line height: 1.25rem
  </p>

  <p class="body">
    <span class="note">Note</span><br>
    Roboto, 1.25rem
  </p>

  <p class="body">
    <span class="time">Time</span><br>
    Product Sans, 3.125rem
  </p>

  <p class="body">
    <span class="body">All</span><br>
    Kerning: -0.9rem
  </p>
`;

export { template };
