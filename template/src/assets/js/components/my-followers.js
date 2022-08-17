class MyFollowers extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="absolute bottom-0 left-2 right-2 flex flex-center">
        <div class="-margin-b-16 height-12 transform (group-hover)-translate-y-16 (expand)width-10 (expand)height-10 (expand)curve-border-full flex justify-around items-center width-full (group-hover)bg-shade-onyx-1 curve-border-full transition duration-300 ease-in-out shadow-dreamy filter brightness-2 saturate-2">

          <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?1">

          <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?2">

          <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?3">

          <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?4">

          <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?5">

          <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?6">

          <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?7">

          <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?8">

          <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?9">

          <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?10">

          <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?11">

          <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?12">

          <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?13">

          <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?14">

        </div>
      </div>
    `;
    this.appendChild(template.content.cloneNode("true"));
  }
  
}
customElements.define("my-followers", MyFollowers);
