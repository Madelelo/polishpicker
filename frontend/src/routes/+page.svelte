<script>
	export let data;

	import Footer from './Footer.svelte';
	import Navbar from './Navbar.svelte';
	import PolishListPage from './PolishListPage.svelte';
	import styles from './styles.css';
</script>

<main>
	<Navbar />

	<PolishListPage polishes={data} />

	<Footer />
</main>
