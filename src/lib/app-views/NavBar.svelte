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
    {@html pages[pageKey].icon}
  </button>
  {/each}
</div>

<style lang="scss">
.nav-bar {
  display: flex;
  justify-content: stretch;
  height: 100%;

  // &:first-child {
  //   background-color: yellow;
  // }
  // border-radius: 100%;
  // background-color: yellow;
  // &:last-child {
    
  //   // border-top-right-radius: 20px;
  // }
  
  &__btn {
    &:first-child {
      border-top-left-radius: 20px;
    }
    &:last-child {
      border-top-right-radius: 20px;
    }
    // border-radius: 20px;
    // border-top-left-radius: 20px;
    // border-top-right-radius: 20px;
    background-color: var(--primary-color);
    opacity: 100;
    border-width: 0px;
    width: calc(100% / 3);

  }
}


</style>