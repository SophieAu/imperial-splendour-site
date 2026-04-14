<script lang="ts">
  import headerLogoPng from '@assets/header_logo.png';
  import headerLogoWebp from '@assets/header_logo.webp';
  import { header as strings } from '../../data/strings';
</script>

<a href="/" aria-label={strings.logoLinkLabel}>
  <picture>
    <source srcset={headerLogoWebp.src} type="image/webp" />
    <img src={headerLogoPng.src} alt={strings.logoAlt} class="home-logo" />
  </picture>
</a>

<style>
  a {
    line-height: 0;
  }

  .home-logo {
    flex: 1;
    height: 3.5rem;
    line-height: 0;
    width: calc(3.5rem * 300 / 92);
  }
</style>
