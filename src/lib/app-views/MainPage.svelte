<script>
  import ImageSlider from "./components/ImageSlider.svelte";

  let runBtnStates = {
    pause: {
      id: 'pause',
      label: 'Старт'
    },
    run: {
      id: 'run',
      label: 'Финиш'
    }
  };

  let runBtnState = runBtnStates.pause;
  
  function runStuff(event) {
    if (runBtnState.id == 'pause') {
      runBtnState = runBtnStates.run;
    } else {
      runBtnState = runBtnStates.pause;;
    }
    
  }
</script>
<div class="main-page">
  <div class="main-page__slider">
    <ImageSlider/>
  </div>
  <button on:click={runStuff} class="{['main-page__start-btn', runBtnState.id == 'run' ? 'active': ''].join(' ')}">
    {runBtnState.label}
  </button>
  <button class="main-page__count-btn">
    500м
  </button>
</div>


<style lang="scss">
  div {
    padding: 0;
  }

  .main-page {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 20%;
    gap: 23px;
    // align-items: center;
    &__slider {
      width: 100%;
      flex: 1;
    }
    &__start-btn {
      background-color: #C8DDFC;
      border-radius: 10px;
      color: #1A6E9D;
      font-weight: bold;
      border-color: #1A6E9D;
      margin-left: 50px;
      margin-right: 50px;
      height: 50px;
      margin-top: 50px;
    }

    &__count-btn {
      font-size: 50px;
      color: #1A6E9D;
      font-weight: bold;
      margin-top: 5%;
      text-align: center;
      overflow: hidden;
      height: 180px;
    }
  }

  .active {
    background-color: #1A6E9D;
    color: white;
  }


</style>