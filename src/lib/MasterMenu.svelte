<script>
  import CompanySettingView from "./master-views/CompanySettingView.svelte";
  import FundSettingView from "./master-views/FundSettingView.svelte";

  let pages = {
    'fundView': FundSettingView,
    'companyView': CompanySettingView
  }

  let selected = pages.fundView;

</script>

<div class="master-menu">

    <button on:click={() => selected=pages.fundView}>Фонды</button>
    <button on:click={() => selected=pages.companyView}>Компании</button>

    <div class="master-menu_content">
      <svelte:component this={selected} />
    </div>
</div>

<style>
.master-menu {
  display: flex;
  flex-direction: column;
}
.master-menu_content {

}
</style>