class MainHeader extends HTMLElement {
  constructor() {
    super();
    const data = {
      brand: "WEAVV CSS",
    };
    this.brand = data.brand;
    this.text = `Welcome to ${this.brand} Demo!`;
  }

  // component attributes
  static get observedAttributes() {
    return ["text"];
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
      <div class="text-lg text-white text-offset-shadow offset-x-2 offset-y-2 offset-blur-4 transform (group-hover)translate-y-16 transition duration-300 linear">
        ${this.text}
      </div>
    `;
    this.appendChild(template.content.cloneNode("true"));
  }
}
// register component
customElements.define("main-header", MainHeader);
