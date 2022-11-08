<script>
  export let season;
</script>

<div class="navbar">
  <h2>Madeleines Negelakkhylle</h2>
  <div class="box"><h3>{season} Polish</h3></div>
  <div />
</div>

<style>
  @import url("https://fonts.cdnfonts.com/css/bauhaus-modern");
  * {
    padding: 0;
    margin: 0;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    background: #04063a;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;

    border-style: solid;
    border-bottom-width: 0.5rem;
    border-color: #6668b0;
  }
  .box {
    border-style: solid;
    border-bottom-width: 0.25rem;
    border-color: #6668b0;
    padding-inline: 0.2rem;
  }
  h2 {
    font-family: "Bauhaus Modern", sans-serif;
    font-weight: bold;
    font-size: medium;
    color: #dcc2ff;
  }
  h3 {
    font-family: "Bauhaus Modern", sans-serif;
    font-weight: bold;
    font-size: small;
    color: #dcc2ff;
  }

  div ul {
    display: flex;
    list-style: none;
  }

  div li {
    padding-left: 1rem;
  }
</style>
