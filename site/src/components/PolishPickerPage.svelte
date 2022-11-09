<script>
  import PolishPickerBox from "./PolishPickerBox.svelte";
</script>

<div class="picker-menu">
  <div class="picker-button" id="left">Browse</div>

  <div class="picker-main-content">
    <PolishPickerBox title={"Nail Art"} />
    <PolishPickerBox title={"Nail Polish nr. 1"} />
    <PolishPickerBox title={"Nail Polish nr. 2"} />
    <PolishPickerBox title={"Nail Polish nr. 3"} />
  </div>
  <div class="picker-button" id="right">Auto polish</div>
</div>

<style>
  .picker-menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .picker-main-content {
    padding: 0 0.5rem;
  }
  .picker-button {
    align-self: flex-end;
    justify-self: flex-end;
    text-align: center;
    background-color: #740aff;

    border-style: solid;
    border-width: 0.25rem 0.5rem 0.5rem 0.25rem;
    border-color: #666666;
    width: 15%;
    padding: 20px 0;
  }
</style>
