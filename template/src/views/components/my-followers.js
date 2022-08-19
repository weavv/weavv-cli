class MyFollowers extends HTMLElement {
  constructor() {
    super();

    this.followers = [];
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
    this.getData();
  }

  getData() {
    fetch("./assets/data/followers.json")
      .then((response) => {
        response.json().then((data) => {
          delete this.error;
          this.followers = data;
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
    this.followers.forEach((item) => {
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
