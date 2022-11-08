<script>
  import PolishPickerBox from "./PolishPickerBox.svelte";
</script>

<div>
  <PolishPickerBox title={"Nail Art"} />
  <PolishPickerBox title={"Nail Polish nr. 1"} />
  <PolishPickerBox title={"Nail Polish nr. 2"} />
  <PolishPickerBox title={"Nail Polish nr. 3"} />
</div>
<div class="picker-menu">
  <div class="picker-button">Browse</div>
  <div />
  <div class="picker-button">Auto polish</div>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    background-color: #dcc2ff;
    width: 100vw;
  }
  .picker-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 100px;
  }
  .picker-button {
    text-align: center;
    background-color: #740aff;

    border-style: solid;
    border-width: 0.25rem 0.5rem 0.5rem 0.25rem;
    border-color: #666666;

    height: 100%;
    width: 30%;
  }
</style>
