<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import MasterMenu from './lib/MasterMenu.svelte';
  import AuthView from './lib/AuthView.svelte';
  import PagesView from './lib/app-views/PagesView.svelte';

  let userAuth = true;
</script>

<main class="main-app">
  {#if userAuth}
    <PagesView />
  {:else}
  <div class="main-app__auth-view">
    <AuthView />
  </div>
  {/if}
    
  <!-- <AuthView /> -->
  <!-- <MasterMenu /> -->
</main>

<style lang="scss">
.main-app {
  height: 100vmax;
  &__auth-view {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
</style>
<!-- style="max-width: 360px; width: 360px; min-width: 360px; max-height: 640px; height: 640px; min-height: 640px; background-color: red;" -->