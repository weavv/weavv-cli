class MainFooter extends HTMLElement {
  constructor() {
    super();
  }

  // connect component
  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="flex flex-center flex-gap-2 select-none transform (group-hover)-translate-y-24 transition duration-100 linear">
        <div class="relative width-12 height-12 text-xs bg-white curve-border-lg shadow-lg">
          <div class="absolute top-4 left-1 transform -rotate-45 text-tint-onyx-2 shadow-dreamy-lg">
            Credits
          </div>
        </div>
        <div class="text-xs text-white text-offset-shadow offset-x-2 offset-y-2 offset-blur-4">
          <div>
            Image taken from
            <a class="text-underline text-uppercase" href="https://www.pexels.com/photo/photography-of-roadway-during-dusk-1034662/" target="_blank">
              Pexels
            </a>
          </div>
          <div>
            Code editor ~
            <a class="text-underline text-uppercase" href="https://microsoft.github.io/monaco-editor/" target="_blank">
              Monaco Editor
            </a>
          </div>
          <div>
            Framework written with
            <a class="text-underline text-uppercase" href="https://sass-lang.com/" target="_blank">
              Sass-Lang
            </a>
          </div>
        </div>
      </div>
    `;
    this.appendChild(template.content.cloneNode("true"));
  }
}
// register component
customElements.define("main-footer", MainFooter);
