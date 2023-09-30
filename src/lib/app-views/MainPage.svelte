<script>
  import ImageSlider from "./components/ImageSlider.svelte";
</script>
<div class="main-page">
  <div class="main-page__slider">
    <ImageSlider />
  </div>
  <button class="main-page__start-btn">
    Старт/Финиш
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
    // gap: 20%;
    align-items: center;
    &__slider {
      width: 100%;
      flex: 1;
    }
    &__start-btn {

    }

    &__count-btn {
      
    }
  }


</style>