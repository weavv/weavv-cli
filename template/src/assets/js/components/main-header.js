const template = document.createElement("template");
template.innerHTML = `
  <div class="text-lg text-white text-offset-shadow offset-x-2 offset-y-2 offset-blur-4 transform (group-hover)translate-y-16 transition duration-300 linear">
    <item></item>
  </div>
`;


class MainHeader extends HTMLElement {
  //...
  constructor() {
    super();
    this.appendChild(template.content.cloneNode("true"));
    //...
    // this.querySelector("desc").innerText = this.getAttribute("text");
    // this.querySelector("img").src = this.getAttribute("image");
    // this.querySelector("a").href = this.getAttribute("url");
    this.querySelector("item").innerText = this.getAttribute("text");
  }
}
customElements.define("main-header", MainHeader);
