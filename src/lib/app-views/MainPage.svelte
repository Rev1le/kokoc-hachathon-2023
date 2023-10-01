<script>
  import ImageSlider from "./components/ImageSlider.svelte";

  let runBtnStates = {
    pause: {
      id: 'pause',
      label: 'Старт/Финиш'
    },
    run: {
      id: 'run',
      label: 'В процессе активности'
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
    <ImageSlider />
  </div>
  <button on:click={runStuff} class="{['main-page__start-btn', runBtnState.id == 'run' ? 'active': ''].join(' ')}">
    {runBtnState.label}
  </button>
  <button class="main-page__count-btn">
    Счетчик км.м
  </button>
</div>


<style lang="scss">
  .main-page {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 40%;
    gap: 10px;
    align-items: center;
    &__slider {
      width: 100%;
      flex: 1;
    }
    &__start-btn {
      border-radius: 5px;
    }

    &__count-btn {
      border-radius: 5px;
    }
  }

  .active {
    background-color: green;
  }


</style>