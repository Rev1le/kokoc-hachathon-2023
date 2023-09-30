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
  <div class="main-page__setting">
    s
  </div>
  <!-- <SettingView /> -->
  <svelte:component this={pages[activePage].component}></svelte:component>
  <NavBar on:page={setActivePage} pages={pages} />
</div>

<style>
  .pages-view {
    position: relative;
    display: flex;
    flex-direction: column;
    /* justify-content: stretch; */
    /* align-items: center; */
  }
  .main-page__setting {
    /* position: absolute; */
    background-color: wheat;
    border-radius: 100%;
    align-self: flex-end;
  }
</style>