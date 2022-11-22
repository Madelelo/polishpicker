<script>
  import Footer from "./components/Footer.svelte";
  import sanityClient from "@sanity/client";
  import PolishListPage from "./components/PolishListPage.svelte";
  import Navbar from "./components/Navbar.svelte";

  const client = sanityClient({
    projectId: "4lxm0vjb",
    dataset: "production",
    apiVersion: "2021-10-21",
    token:
      "skqm9XS6noUZ19tfG15kVWgEXWHo48T2m7vDQM1550cBiMrTxITkVmgPMEtNHF0uDcRJURf5kXbBFDyLjnBYjEHlUnvCgBhzTYiv02la0SEVH2EOdrvKqOh8DriN6cVPIxcUxtl7l9QC2VTcguYrVmXvrf1bES4dehLNSrOY1gfxDHS4Slij",
    useCdn: false,
  });

  export async function get() {
    const data = await client.fetch(`*[_type == "nailpolish"]`);
    if (data) {
      return {
        status: 200,
        body: {
          nailpolish: data,
        },
      };
    }
    return {
      status: 500,
      body: new Error("Internal Server Error"),
    };
  }
</script>

<main>
  <Navbar />
  {#await get()}
    <p>...waiting</p>
  {:then polish}
    <PolishListPage polishes={polish} />
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}

  <Footer />
</main>
