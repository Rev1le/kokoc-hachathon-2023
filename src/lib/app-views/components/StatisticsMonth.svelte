<script>
  export let label = '';

  export let sportsData = {};
</script>
<div class="statistics-month">
  <span class="statistics-month__title">{label}</span>
  <div class="statistics-month__scores">
    {#each Object.keys(sportsData.sportScores ?? {}) as sport}
      <div class="statistics-month__sport">
        {sportsData.sportScores[sport].actionLabel} - {sportsData.sportScores[sport].score}
      </div>
    {/each}
  </div>
  <span class="statistics-month__money">
    Итог: <b>{sportsData.money}</b>
  </span>
  
</div>

<style lang="scss">
  .statistics-month {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    &__title {
      display: flex;
      justify-content: center;
      font-size: 24px;
      font-style: bold;
    }
    &__scores {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    &__sport {
      padding: 5px 20px;
      margin: 0px 30px;
      margin-left: 0px;
      background-color: var(--second-color);
      border-radius: 6px;
      border-width: 3px;
      border-color: var(--primary-color);
      border-style: solid;
      border-left: 0px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }

    &__money {
      margin-top: 10px;
      margin-bottom: 30px;
      background-color: rgb(95, 210, 95);
      align-self: flex-start;
      padding: 4px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
</style>