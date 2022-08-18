class MyFollowers extends HTMLElement {
  constructor() {
    super();

    this.data = [
      {
        name: "John Doe",
        url: "https://i.pravatar.cc/50?1",
      },
      {
        name: "John Doe",
        url: "https://i.pravatar.cc/50?2",
      },
      {
        name: "John Doe",
        url: "https://i.pravatar.cc/50?3",
      },
      {
        name: "John Doe",
        url: "https://i.pravatar.cc/50?4",
      },
      {
        name: "John Doe",
        url: "https://i.pravatar.cc/50?5",
      },
      {
        name: "John Doe",
        url: "https://i.pravatar.cc/50?6",
      },
      {
        name: "John Doe",
        url: "https://i.pravatar.cc/50?7",
      },
      {
        name: "John Doe",
        url: "https://i.pravatar.cc/50?8",
      },
      {
        name: "John Doe",
        url: "https://i.pravatar.cc/50?9",
      },
      {
        name: "John Doe",
        url: "https://i.pravatar.cc/50?10",
      },
      {
        name: "John Doe",
        url: "https://i.pravatar.cc/50?11",
      },
      {
        name: "John Doe",
        url: "https://i.pravatar.cc/50?12",
      },
      {
        name: "John Doe",
        url: "https://i.pravatar.cc/50?13",
      },
      {
        name: "John Doe",
        url: "https://i.pravatar.cc/50?14",
      },
    ];
  }

  // connect component
  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="absolute bottom-0 left-2 right-2 flex flex-center">

        <data-my-followers
          class="-margin-b-16 height-12 transform (group-hover)-translate-y-16 flex flex-row justify-around items-center width-full (group-hover)bg-shade-onyx-1 curve-border-full transition duration-300 ease-in-out shadow-dreamy filter brightness-2 saturate-2">
        </data-my-followers>

      </div>
    `;
    this.appendChild(template.content.cloneNode("true"));
    this.update();
  }

  update() {
    this.data.forEach((item) => {
      let followers = document.createElement("div");
      followers.innerHTML = `
        <img class="width-10 height-10 (hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 bg-tone-onyx-2 transition duration-300 linear (hover)shadow-md curve-border-full" src="${item.url}" alt="${item.name}">
      `;
      this.querySelector("data-my-followers").appendChild(followers);
    });
  }
}
// register component
customElements.define("my-followers", MyFollowers);
