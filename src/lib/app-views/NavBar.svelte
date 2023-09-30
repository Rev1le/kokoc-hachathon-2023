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
  <button on:click={() => emitPage(pageKey)}>
    {pages[pageKey].title}
  </button>
  {/each}
</div>

<style>
.nav-bar {
  display: flex;
  justify-content: stretch;
}
</style>