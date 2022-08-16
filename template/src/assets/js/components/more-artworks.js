class MoreArtworks extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="absolute left-16 bottom-24 transform (group-hover)translate-y-32 transition duration-1000 ease-in-out">

        <div class="padding-y-2 font-lato text-xs text-shade-onyx-1">
          Arkworks &copy; John Doe
        </div>

        <div class="transform-perspective-500 flex flex-gap-2 cursor-pointer">

          <img class="width-32 height-20 object-cover object-center curve-border shadow-md transform (hover)rotate-y-39 transition duration-200 linear (hover)opacity-75 filter brightness-2 saturate-2" src="https://images.pexels.com/photos/814830/pexels-photo-814830.jpeg?auto=compress&cs=tinysrgb&w=300">

          <img class="width-32 height-20 object-cover object-center curve-border shadow-md transform (hover)-translate-y-2 transition duration-200 linear (hover)opacity-75" src="https://images.pexels.com/photos/1742927/pexels-photo-1742927.jpeg?auto=compress&cs=tinysrgb&w=300">

          <img class="width-32 height-20 object-cover object-center curve-border shadow-md transform (hover)-translate-y-2 transition duration-200 linear (hover)opacity-75" src="https://images.pexels.com/photos/708764/pexels-photo-708764.jpeg?auto=compress&cs=tinysrgb&w=300">

          <img class="width-32 height-20 object-cover object-center curve-border shadow-md transform (hover)-rotate-y-39 transition duration-200 linear (hover)opacity-75" src="https://images.pexels.com/photos/2537609/pexels-photo-2537609.jpeg?auto=compress&cs=tinysrgb&w=300">

        </div>
      </div>
    `;
    this.appendChild(template.content.cloneNode("true"));
  }
}
customElements.define("more-artworks", MoreArtworks);
