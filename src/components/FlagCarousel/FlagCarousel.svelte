<script lang="ts">
  import ButtonLeft from "./ButtonLeft.svelte";
  import ButtonRight from "./ButtonRight.svelte";
  import { paths } from "../../config";
  import type { CollectionEntry } from "astro:content";

  interface Props {
    selected: string;
    factions: CollectionEntry<"factions">[];
  }

  let { selected, factions }: Props = $props();

  const DESKTOP_OFFSETS = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
  const TABLET_OFFSETS = [-2, -1, 0, 1, 2];
  const MOBILE_OFFSETS = [0];

  const IMAGE_WIDTH = 132;
  const IMAGE_HEIGHT = 66;

  let indices = $state(MOBILE_OFFSETS);

  const updateIndices = () => {
    if (window.innerWidth >= 992) {
      indices = DESKTOP_OFFSETS;
    } else if (window.innerWidth >= 768) {
      indices = TABLET_OFFSETS;
    } else {
      indices = MOBILE_OFFSETS;
    }
  };

  $effect(() => {
    updateIndices();
    window.addEventListener("resize", updateIndices);
    return () => window.removeEventListener("resize", updateIndices);
  });

  const circularModulo = (base: number) => (value: number) => (value < 0 ? base + value : value % base);

  const selectedIndex = $derived(factions.findIndex((f) => f.data.slug === selected));
  const modulo = $derived(circularModulo(factions.length));

  const getFaction = (offset: number) => factions[modulo(selectedIndex + offset)].data;

  const calcWidth = (offset: number) => IMAGE_WIDTH / Math.abs(offset || 1);
  const calcHeight = (offset: number) => IMAGE_HEIGHT * (1 - (offset * offset) / 100);
  const calcSide = (offset: number) => (offset === 0 ? "center" : offset > 0 ? "right" : "left");
  const calcImgRight = (offset: number) => (calcSide(offset) === "left" ? calcWidth(offset) - IMAGE_WIDTH : 0);
  const calcImgLeft = (offset: number) => (calcSide(offset) === "right" ? calcWidth(offset) - IMAGE_WIDTH : 0);
</script>

<div class="carousel">
  {#each indices as offset (offset)}
    {#if offset === 0}
      <ButtonLeft href={`${paths.factions}/${getFaction(-1).slug}`} />
    {/if}

    <picture
      style:--w="{calcWidth(offset)}px"
      style:--h="{calcHeight(offset)}px"
      style:--z={-Math.abs(offset)}
      style:--side={calcSide(offset)}
      style:--img-right="{calcImgRight(offset)}px"
      style:--img-left="{calcImgLeft(offset)}px"
    >
      <img src={getFaction(offset).flag.default.src} alt={getFaction(offset).title} />
    </picture>

    {#if offset === 0}
      <ButtonRight href={`${paths.factions}/${getFaction(1).slug}`} />
    {/if}
  {/each}
</div>

<style>
  .carousel {
    align-items: center;
    display: flex;
    justify-content: center;
    padding-top: 2rem;
  }

  picture {
    height: var(--h);
    overflow: unset;
    position: relative;
    width: var(--w);
    z-index: var(--z);
  }

  picture img {
    height: 100%;
    left: var(--img-left);
    object-fit: cover;
    object-position: var(--side) center;
    position: absolute;
    right: var(--img-right);
    width: 132px; /* IMAGE_WIDTH */
  }
</style>
