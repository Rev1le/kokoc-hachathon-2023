<script>
import { fade, slide, fly, scale } from 'svelte/transition';
import { quadInOut, quintOut } from 'svelte/easing';

  import NavBar from "./NavBar.svelte";
  import StatisticsPage from "./StatisticsPage.svelte";
  import RaitingPage from "./RaitingPage.svelte";
  import MainPage from "./MainPage.svelte";

  import SettingsSvg from '@assets/settings.svg?raw'

  import SettingView from "./SettingView.svelte";

  import Raiting from '@assets/raiting.svg?raw';
  import Main from '@assets/main.svg?raw';
  import Stats from '@assets/stats.svg?raw';

  let visible = true; 

  let pages = {
    'rating': {
      'title': 'Рейтинг',
      'component': RaitingPage,
      'icon': Raiting
    },
    'main': {
      'title': 'Главная',
      'component': MainPage,
      'icon': Main
    },
    'statistics': {
      'title': 'Статистика',
      'component': StatisticsPage,
      'icon': Stats
    }
  }

  let activePage = 'main';
  let activeI = 1;
  let isOpenSettings = true;

  function getFlyTransition(i) {
    if (i > activeI) {
      activeI = i;
      return { x: -200, duration: 1000, easing: quadInOut };
    } else {
      activeI = i;
      return { x: 200, duration: 1000, easing: quadInOut };
    }
  }

</script>
<div class="pages-view">
  <div 
    class="pages-view__setting"
    on:click={(event) => isOpenSettings = !isOpenSettings}
  >
    {@html SettingsSvg}
  </div>

  {#if isOpenSettings}
  <div class="pages-view__setting-view" in:scale={{ duration: 500, opacity: 0.5, start: 0.2, easing: quintOut }}>
    <SettingView />
  </div>
  {:else}
  {#each Object.keys(pages) as page, i}
    {#if page == activePage}
      <div class="pages-view__content" in:fly={getFlyTransition(i)} out:fade={{ duration: 200 }}>
        <svelte:component this={pages[page].component}></svelte:component>
      </div>
    {/if}
  {/each}

  <div class="pages-view__navbar">
    <NavBar on:page={(event) => activePage = event.detail} pages={pages} />
  </div>
  {/if}

  
</div>

<style lang="scss">
  .pages-view {
    position: relative;
    height: 100%;
    display: grid;
    grid-template-columns: 1.5fr 54px; 
    grid-template-rows: 54px 2fr 0.3fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      ". settings"
      "content content"
      "navbar navbar"; 

    &__content {
      grid-area: content;
      padding-top: 10px;
    }
    
    &__setting {
      z-index: 5;
      display: flex;
      justify-content: center;
      align-items: center;
      grid-area: settings;
    }
    &__navbar {
      grid-area: navbar;
    }
    &__setting-view {
      position: absolute;
      // z-index: 2;
    }
  }
  
</style>