<script>
  export let title;
  export let nailpolish;
</script>

<div class="picker-box">
  <div class="picker-view">{nailpolish.colorName}</div>
  <div class="picker-buttons">
    <div class="picker-button">Left</div>
    <div class="picker-button">"||"</div>
    <div class="picker-button">Right</div>
  </div>
</div>

<style>
  .picker-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;

    width: 34vw;
    height: 15rem;
  }
  .picker-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.25rem 0;
  }
  .picker-button {
    text-align: center;
    background-color: #aeaeae;

    width: 30%;
    padding-top: 0.5rem;

    border-style: solid;
    border-width: 0.15rem 0.25rem 0.25rem 0.15rem;
    border-color: #666666;
  }
  .picker-view {
    background-color: #aeaeae;

    border-style: solid;
    border-width: 0.25rem 0.5rem 0.5rem 0.25rem;
    border-color: #666666;

    padding: 0 0 0.25rem 0;

    height: 100%;
  }
</style>
