<script lang="ts">
  import buttonRightPng from '@assets/button_right.png';
  import buttonRightWebp from '@assets/button_right.webp';
  import { factions } from '../../data/strings';

  interface Props {
    href: string;
  }

  let { href }: Props = $props();
</script>

<a {href} aria-label={factions.nextButton} class="nav-btn">
  <picture>
    <source srcset={buttonRightWebp.src} type="image/webp" />
    <img src={buttonRightPng.src} alt={factions.nextButton} />
  </picture>
</a>

<style>
  .nav-btn {
    line-height: 0;
    margin: 0 1rem;
  }
</style>
