class ProfileAvatar extends HTMLElement {
  constructor() {
    super();

    this.name = "No Name.";
    this.link = "https://i.pravatar.cc/250";
    this.imageurl = "https://i.pravatar.cc/250";
  }

  // component attributes
  static get observedAttributes() {
    return ["name", "imageurl", "link"];
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  // connect component
  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="absolute left-16 top-16 transform (group-hover)-translate-y-24 transition duration-100 linear flex flex-center">

        <img class="width-32 height-32 object-cover object-center curve-border-full filter brightness-1 saturate-2" src="${this.imageurl}" alt="${this.name}" />

        <a class="padding-x-4 text-xl-2 text-white font-bold (hover)text-underline" href="${this.link}" target="_blank">
          ${this.name}
        </a>

      </div>
    `;
    this.appendChild(template.content.cloneNode("true"));
  }
}
// register component
customElements.define("profile-avatar", ProfileAvatar);
