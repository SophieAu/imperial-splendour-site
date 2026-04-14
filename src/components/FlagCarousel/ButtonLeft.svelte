<script lang="ts">
  import buttonLeftPng from '@assets/button_left.png';
  import buttonLeftWebp from '@assets/button_left.webp';
  import { factions } from '../../data/strings';

  interface Props {
    href: string;
  }

  let { href }: Props = $props();
</script>

<a {href} aria-label={factions.previousButton} class="nav-btn">
  <picture>
    <source srcset={buttonLeftWebp.src} type="image/webp" />
    <img src={buttonLeftPng.src} alt={factions.previousButton} />
  </picture>
</a>

<style>
  .nav-btn {
    line-height: 0;
    margin: 0 1rem;
  }
</style>
