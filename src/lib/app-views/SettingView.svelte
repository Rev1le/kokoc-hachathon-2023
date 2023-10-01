
<div class="setting-view">
  
  <span class="setting-view__username">fee</span>
  <div class="setting-view__select-fund param">
    <span class="select-fund__title">Выбор фонда</span>
<select name="pets" id="pet-select" class="select-fund__select">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
  </select>
  </div>
</div>



<style lang="scss">
  .setting-view {
    z-index: 999;
    height: 100vh;
    width: 100vw;
    padding: 20px 0px;
    // padding-right: 60px;
    display: flex;
    flex-direction: column;
    &__username {
      font-size: 28px;
      font-weight: 700;
    }
    &__select-fund {

    }
    /* background-color: blue; */
  }
  .param {
    width: 100%;
    padding: 5px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 2px solid rgba(var(--primary-color), 0.4);
    border-bottom: 2px solid var(--primary-color);
  }
  .select-fund{
    &__title {
      align-self: flex-start;
      font-weight: 600;
    }
  }

</style>