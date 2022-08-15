const template = document.createElement("template");
template.innerHTML = `
  <div class="(md)padding-10 (sm)padding-6 (child-2)padding-t-4 (child-2)text-sm text-tint-onyx-1 font-bold flex flex-gap-8 (md)flex-row (sm)flex-column justify-center items-start transform (group-hover)-translate-y-6 transition duration-300 linear">
    <div class="(child-1)padding-t-2 (child-2)padding-t-2 (child-1)text-xl-5 (child-2)text-xl-5">
      <p class="(group-hover)hidden depth-tight-2 transition duration-300 linear (md)text-right">
        Absolute <br> Silent
      </p>
      <p class="hidden (group-hover)block text-tint-teal-1 depth-tight-2 transition duration-300 linear (md)text-right">
        Absolute <br> <span class="(group-hover)text-underline">Noisy</span>
      </p>
    </div>
    <p class="block">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id magna in purus <span class="text-underline line-thickness-3 line-offset-1">sodales efficitur</span>. Maecenas consequat sem magna, mollis pulvinar ante tincidunt quis.
    </p>
  </div>
`;


class MainArticle extends HTMLElement {
  //...
  constructor() {
    super();
    this.appendChild(template.content.cloneNode("true"));
    //...
  }
}
customElements.define("main-article", MainArticle);
