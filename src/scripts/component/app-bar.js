class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="app-bar">
            <div class="app-bar__menu">
            <button id="hamburgerButton">☰</button>
            </div>
            <div class="app-bar__brand">
            <h1>Restaurant Catalogue</h1>
            </div>
            <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
                <li><a href="./">Home</a></li>
                <li><a href="#/favorite">Favorite</a></li>
                <li><a href="https://www.linkedin.com/in/delphia-aryana-1639b5246/">About</a></li>
            </ul>
            </nav>
        </header>
      `;
  }
}

customElements.define('app-bar', AppBar);
