const template = document.createElement('template');
template.innerHTML=`
  <div class="absolute left-16 top-16 transform (group-hover)-translate-y-24 transition duration-100 linear flex flex-center">

    <img class="width-32 height-32 object-cover object-center curve-border-full filter brightness-1 saturate-2">

    <a class="padding-x-4 text-xl-2 text-white font-bold (hover)text-underline">
      <username></username>
    </a>

  </div>
`;


class ProfileAvatar extends HTMLElement {
  //...
  constructor() {
    super();
    this.appendChild(template.content.cloneNode('true'));
    //...
    this.querySelector("img").src = this.getAttribute("image");
    this.querySelector("a").href = this.getAttribute("url");
    this.querySelector("username").innerText = this.getAttribute("name");
  }
}
customElements.define('profile-avatar', ProfileAvatar);
