class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <picture>
              <source media="(max-width: 600px)" srcset="./images/hero.jpg">
              <img src='./images/hero.jpg' alt="hero">
            </picture>
            <div class="hero__inner">
            <h1 class="hero__title">Selamat datang di website kami! Mulailah menjelajahi restoran yang ada di Indonesia.</h1>
            <p class="hero__tagline">
                Temukan beragam restoran menarik di Indonesia.
            </p>
            </div>
        </div>
      `;
  }
}

customElements.define('app-hero', AppHero);
