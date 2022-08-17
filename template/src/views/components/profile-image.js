class ProfileImage extends HTMLElement {
  constructor() {
    super();

    const imagesize = {
      small: "300",
      large: "600",
    };

    this.small = imagesize.small;
    this.large = imagesize.large;
    this.url = "";
  }

  static get observedAttributes() {
    return ["url", "title"];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <img class="transform (group-hover)scale-105 duration-300 (md)width-screen (sm)width-64 (md)height-40 (sm)height-88 object-cover object-center bg-tint-onyx-3 bg-tint-onyx-5 filter brightness-4 saturate-2" sizes="70vmin" srcset="${this.url}?auto=compress&cs=tinysrgb&w=${this.small} ${this.small}w, ${this.url}?auto=compress&cs=tinysrgb&w=${this.large} ${this.large}w" alt="${this.title}" />
    `;
    this.appendChild(template.content.cloneNode("true"));
  }
}
customElements.define("profile-image", ProfileImage);
