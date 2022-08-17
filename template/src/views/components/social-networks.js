class SocialNetworks extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="absolute top-2 -right-4">
        <div class="text-lg text-right transform (group-hover)-translate-x-6 transition duration-100 linear">
          <a href="#">
            <div class="width-4 height-4 (hover)width-6 (hover)height-6 bg-tint-onyx-1 (hover)bg-tint-teal-1 curve-border-full transition duration-200 linear"></div>
          </a>
        </div>
      </div>
    `;
    this.appendChild(template.content.cloneNode("true"));
  }
}
customElements.define("social-networks", SocialNetworks);
