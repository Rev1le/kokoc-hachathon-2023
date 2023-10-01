<script>
  import { Swipe, SwipeItem } from "svelte-swipe";

  const swipeConfig = {
    // utoplay: false,
    delay: 1000,
    // showIndicators: true,
    transitionDuration: 500,
    defaultIndex: 0,
    allow_infinite_swipe: true
  };


  let sportTypes = [
    {
      'id': 'sport1',
      'imageSvg': './src/assets/utka.jpg'
    },
    {
      'id': 'sport1',
      'imageSvg': './src/assets/sobaka.jpg'
    },
    {
      'id': 'sport1',
      'imageSvg': './src/assets/medved.jpg'
    },
    {
      'id': 'sport1',
      'imageSvg': './src/assets/4paxa.jpg'
    }
  ];

  let active_item = 0;

  $: if (active_item > sportTypes.length) {
    active_item = 0;
  } else if (active_item < 0) {
    active_item = sportTypes.length - 1;
  }

</script>

<div class="image-slider">
  <div class="image-slider__svg-icon-left">
    <svg  width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  </div>
  <div class="image-slider__swipe">
    <Swipe {...swipeConfig} on:change={(event) => active_item = event.detail.active_item}>
      {#each sportTypes as sportType}
      <SwipeItem style="background-color: black;">
        <div class="image-slider__block">
          <img class="image-slider__elem" src="{sportType.imageSvg}" alt="">
        </div> 
      </SwipeItem>
      {/each}
    </Swipe>
  </div>
  <div class="image-slider__svg-icon-right">
    <svg   width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  </div>
  
  
  <!-- <button  on:click={() => activeIndex -= 1}>left</button>
  {@html activeImage.imageSvg}
  <button on:click={() => activeIndex += 1}>right</button> -->
</div>

<style lang="scss">
  .image-slider {
    position: relative;
    display: flex;
    align-items: center;
    /* justify-content: stretch; */
    width: 100%;
    height: 30vh;
    

    &__swipe {
      margin: 0px 10%;
      width: 100%;
      height: 100%;
    }
  }
  img {
    max-width: 100%;
    height: auto;
  }

  .image-slider__svg-icon {
    
    &-left {
      position: absolute;
      
    }
    &-right {
      position: absolute;
      // left: 100%;
      left: calc(100% - 64px);
    }
  }
  .image-slider__elem {
      object-fit:contain;
  }
  .image-slider__block {
    padding: 15% 15% 15% 15%;

  }
  
</style>