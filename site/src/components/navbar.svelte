<script>
  export let season;
</script>

<div class="navbar">
  <div class="container"><h2>Madeleines Negelakkhylle</h2></div>
  <div class="container"><div class="box"><h3>{season} Polish</h3></div></div>
  <div class="container" />
</div>

<style>
  .navbar {
    display: flex;
    background: #04063a;
    width: 100%;
    padding: 0.5rem;

    border-style: solid;
    border-bottom-width: 0.5rem;
    border-color: #6668b0;
  }
  .container {
    width: 32vw;
  }
  .box {
    margin: auto;
    text-align: center;
    border-style: solid;
    border-bottom-width: 0.25rem;
    border-color: #6668b0;
    padding: 0.1rem 0.5rem;
    width: 50%;
  }

  h2 {
    font-weight: bolder;
    font-size: medium;
    color: #eee4fa;
  }
  h3 {
    font-weight: bolder;
    font-size: small;
    color: #eee4fa;
  }
</style>
