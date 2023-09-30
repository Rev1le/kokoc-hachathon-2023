<script>
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();
export let pages = {};

function emitPage(page) {
  dispatch('page', page);
  }
</script>

<div class="nav-bar">
  {#each Object.keys(pages) as pageKey (pageKey)}
  <button class="nav-bar__btn" on:click={() => emitPage(pageKey)}>
    {pages[pageKey].title}
  </button>
  {/each}
</div>

<style lang="scss">
.nav-bar {
  display: flex;
  justify-content: stretch;
  height: 100%;

  &__btn {
    width: calc(100% / 3);
  }
}
</style>