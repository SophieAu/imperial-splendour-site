<script lang="ts">
  import IconHamburger from "./IconHamburger.svelte";
  import IconClose from "./IconClose.svelte";
  import { header as strings } from "../../strings";
  import HeaderLogo from "./HeaderLogo.svelte";

  let showMenu = $state(false);

  function toggleMenu() {
    showMenu = !showMenu;
    document.body.style.overflow = showMenu ? "hidden" : "";
  }
</script>

<header class="headfoot mobile-header">
  <HeaderLogo />

  <button
    class="toggle-btn hamburger"
    class:hidden={showMenu}
    onclick={toggleMenu}
    aria-label={strings.hamburgerA11yLabel}
    aria-expanded={showMenu}
    aria-controls="mobile-menu"
  >
    <IconHamburger />
  </button>

  <nav id="mobile-menu" class:visible={showMenu}>
    <ul>
      {#each strings.menuItems as item}
        <li>
          <a href={item.path} onclick={toggleMenu}>{item.title}</a>
        </li>
      {/each}
    </ul>
    <button
      class="toggle-btn exit"
      onclick={toggleMenu}
      aria-label={strings.exitA11yLabel}
      aria-expanded={showMenu}
      aria-controls="mobile-menu"
    >
      <IconClose />
    </button>
  </nav>
</header>

<style>
  .mobile-header {
    font: normal 2.5rem var(--font-family-heading);
    height: var(--header-height);
    padding: 0 2.5rem 0 1rem;
    position: fixed;
    top: 0;
    width: calc(100vw - 3.5rem);
  }

  @media (min-width: 1024px) {
    .mobile-header {
      display: none !important;
    }
  }

  a {
    text-decoration: none;
  }

  .toggle-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    line-height: 0;
    margin: 0;
    padding: 0;
  }

  .hamburger {
    color: var(--color-main-bg);
  }

  .hamburger.hidden {
    display: none;
  }

  .exit {
    color: var(--color-header-footer-bg);
  }

  nav {
    display: none;
    align-items: flex-start;
    background: var(--color-main-bg) var(--bg-jpg);
    bottom: 0;
    flex-direction: row;
    height: calc(100vh - 3rem - calc((var(--header-height) - 1.25rem) / 2));
    justify-content: space-between;
    left: 0;
    padding: calc((var(--header-height) - 1.25rem) / 2) 2.5rem 3rem 3rem;
    position: fixed;
    right: 0;
    top: 0;
    width: calc(100vw - 5.5rem);
    z-index: 99;
  }

  nav.visible {
    display: flex;
  }

  :global(.webp) nav {
    background: var(--color-main-bg) var(--bg-webp);
  }

  nav ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  nav li {
    line-height: var(--header-height);
    margin: 0;
  }
</style>
