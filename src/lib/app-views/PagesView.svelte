<script>
import { fade, slide, fly } from 'svelte/transition';
import { quintOut, backIn } from 'svelte/easing';

  import NavBar from "./NavBar.svelte";
  import StatisticsPage from "./StatisticsPage.svelte";
  import RaitingPage from "./RaitingPage.svelte";
  import MainPage from "./MainPage.svelte";

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

  function getFlyTransition(i) {
    if (i > activeI) {
      activeI = i;
      return { x: -200, duration: 1000 };
    } else {
      activeI = i;
      return { x: 200, duration: 1000 };
    }
    
  }
  
  
  function setActivePage(event) {
    // alert(event.detail);
    activePage = event.detail;
  }
</script>
<div class="pages-view">
  <div class="pages-view__setting">
    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 9.11011V14.8801C3 17.0001 3 17.0001 5 18.3501L10.5 21.5301C11.33 22.0101 12.68 22.0101 13.5 21.5301L19 18.3501C21 17.0001 21 17.0001 21 14.8901V9.11011C21 7.00011 21 7.00011 19 5.65011L13.5 2.47011C12.68 1.99011 11.33 1.99011 10.5 2.47011L5 5.65011C3 7.00011 3 7.00011 3 9.11011Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  </div>

  {#each Object.keys(pages) as page, i}
  {#if page == activePage}
  <div class="pages-view__content" in:fly={getFlyTransition(i)} out:fade={{ duration: 200 }}>
    {i}
      <svelte:component this={pages[page].component}></svelte:component>
    </div>
  {/if}
  {/each}

  <div class="pages-view__navbar">
    <NavBar on:page={setActivePage} pages={pages} />
  </div>
</div>

<style lang="scss">
  .pages-view {
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
      display: flex;
      justify-content: center;
      align-items: center;
      // margin: 4px;
      grid-area: settings;
      /* position: absolute; */
      // background-color: wheat;
      // border-radius: 100%;
      // align-self: flex-end;
    }
    &__navbar {
      grid-area: navbar;
      // justify-self: flex-end;
      // background-color: blue;
    }
  }
  
</style>