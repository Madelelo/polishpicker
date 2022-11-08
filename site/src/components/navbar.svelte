<script>
  export let season;
</script>

<div class="navbar">
  <h2>Madeleines Negelakkhylle</h2>
  <div class="box"><h3>{season} Polish</h3></div>
  <div />
</div>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    background: #04063a;
    width: 100%;
    padding: 0.5rem;

    border-style: solid;
    border-bottom-width: 0.5rem;
    border-color: #6668b0;
  }
  .box {
    border-style: solid;
    border-bottom-width: 0.25rem;
    border-color: #6668b0;
    padding: 0.1rem 0.5rem;
  }
  h2 {
    font-weight: bold;
    font-size: medium;
    color: #dcc2ff;
  }
  h3 {
    font-weight: bold;
    font-size: small;
    color: #dcc2ff;
  }
</style>
