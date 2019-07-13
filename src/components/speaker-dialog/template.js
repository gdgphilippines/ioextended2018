import { html } from '@littleq/element-lite/lib/lit-html/lib/lit-extended.js';

const template = (self) => html`
<dialog class="speaker-dialog">
    <div class="header-container"> 
        <div class="close-button">
            <a href="#!">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="#ffffff" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
            </a>
        </div>
        <center>
        <lazy-picture
            src="https://i.pravatar.cc/300"
            class="avatar">
        </lazy-picture>
        </center>
        <h1 class="name">Juan dela Cruz</h1>
        <h2 class="position">Developer Advocate at Google</h2>
    </div>
    <section class="article-container">
        <article>
        Weiyuan is Full Stack Engineer at Rakuten Viki, developing and managing various frontend and backend services. Weiyuan also works for National University of Singapore as a Final Year Project co-supervisor, and volunteers as an organiser for the Singapore charter for GCPUG.
        </article>
    </section>
</dialog>
`;

export { template };
