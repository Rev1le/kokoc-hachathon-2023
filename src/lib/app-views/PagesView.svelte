<script>
  import NavBar from "./NavBar.svelte";
  import StatisticsPage from "./StatisticsPage.svelte";
  import RaitingPage from "./RaitingPage.svelte";
  import MainPage from "./MainPage.svelte";

  import SettingView from "./SettingView.svelte";

  let pages = {
    'rating': {
      'title': 'Рейтинг',
      'component': RaitingPage
    },
    'main': {
      'title': 'Главная',
      'component': MainPage
    },
    'statistics': {
      'title': 'Статистика',
      'component': StatisticsPage
    }
  }

  let activePage = 'main';
  
  
  function setActivePage(event) {
    // alert(event.detail);
    activePage = event.detail;
  }
</script>
<div class="pages-view">
  <div class="pages-view__setting">
    s
  </div>
  <!-- <SettingView /> -->
  <div class="pages-view__content"><svelte:component this={pages[activePage].component}></svelte:component></div>
  
  <div class="pages-view__navbar">
    <NavBar on:page={setActivePage} pages={pages} />
  </div>
</div>

<style lang="scss">
  .pages-view {
    height: 100%;
    display: grid;
    grid-template-columns: 1.5fr 50px; 
    grid-template-rows: 50px 2fr 0.5fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      ". settings"
      "content content"
      "navbar navbar"; 

    &__content {
      grid-area: content;
    }
    
    &__setting {
      margin: 4px;
      grid-area: settings;
      /* position: absolute; */
      background-color: wheat;
      border-radius: 100%;
      // align-self: flex-end;
    }
    &__navbar {
      grid-area: navbar;
      // justify-self: flex-end;
      // background-color: blue;
    }
  }
  
</style>