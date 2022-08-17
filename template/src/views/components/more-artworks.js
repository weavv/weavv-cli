class MoreArtworks extends HTMLElement {
  constructor() {
    super();

    this.data = [
      {
        name: "",
        url: "https://images.pexels.com/photos/814830/pexels-photo-814830.jpeg?auto=compress&cs=tinysrgb&w=300",
        style: "(hover)rotate-y-39",
      },
      {
        name: "",
        url: "https://images.pexels.com/photos/1742927/pexels-photo-1742927.jpeg?auto=compress&cs=tinysrgb&w=300",
        style: "(hover)-translate-y-2",
      },
      {
        name: "",
        url: "https://images.pexels.com/photos/708764/pexels-photo-708764.jpeg?auto=compress&cs=tinysrgb&w=300",
        style: "(hover)-translate-y-2",
      },
      {
        name: "",
        url: "https://images.pexels.com/photos/2537609/pexels-photo-2537609.jpeg?auto=compress&cs=tinysrgb&w=300",
        style: "(hover)-rotate-y-39",
      },
    ];
  }

  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="absolute left-16 bottom-24 transform (group-hover)translate-y-32 transition duration-1000 ease-in-out">

        <div class="padding-y-2 font-lato text-xs text-shade-onyx-1">
          Arkworks &copy; John Doe
        </div>

        <data-artworks
          class="flex flex-gap-2 cursor-pointer">
        </data-artworks>

      </div>
    `;
    this.appendChild(template.content.cloneNode("true"));

    this.data.forEach((item) => {
      let artworks = document.createElement("div");
      artworks.classList.add("transform-perspective-500");
      artworks.innerHTML = `
        <img class="width-32 height-20 object-cover object-center curve-border shadow-md transform ${item.style} transition duration-200 linear (hover)opacity-75" src="${item.url}" alt="${item.name}">
      `;
      this.querySelector("data-artworks").appendChild(artworks);
    });
  }
}
customElements.define("more-artworks", MoreArtworks);
