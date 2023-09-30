<script>
  import ImageSlider from "./components/ImageSlider.svelte";
</script>
<div class="main-page">
  <ImageSlider />
  <button>
    Старт/Финиш
  </button>
  <button>
    Счетчик км.м
  </button>
</div>


<style>
  .main-page {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
  }
</style>