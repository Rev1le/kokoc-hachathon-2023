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
    <AuthView />
  {/if}
    
  <!-- <AuthView /> -->
  <!-- <MasterMenu /> -->
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p> -->
</main>

<style>
.main-app {
  height: 100vmax;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
</style>
<!-- style="max-width: 360px; width: 360px; min-width: 360px; max-height: 640px; height: 640px; min-height: 640px; background-color: red;" -->