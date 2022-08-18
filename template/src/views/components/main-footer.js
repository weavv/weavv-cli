class MainFooter extends HTMLElement {
  constructor() {
    super();

    this.vendors = [];
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
          <data-vendors></data-vendors>
        </div>

      </div>
    `;
    this.appendChild(template.content.cloneNode("true"));
    this.getData();
  }

  getData() {
    fetch("./assets/data/vendors.json")
      .then((response) => {
        response.json().then((data) => {
          delete this.error;
          data.length = 3;
          this.vendors = data;
          console.log(data);
          this.update();
        });
      })
      .catch((error) => {
        this.error = error;
        console.log(error);
        this.update();
      });
  }

  update() {
    this.vendors.forEach((item) => {
      let vendors = document.createElement("div");
      vendors.innerHTML = `
        ${item.text}
        <a class="text-underline text-uppercase" href="${item.url}" target="_blank">
          ${item.vendor}
        </a>
      `;
      this.querySelector("data-vendors").appendChild(vendors);
    });
  }
}
// register component
customElements.define("main-footer", MainFooter);
