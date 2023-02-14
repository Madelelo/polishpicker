<script>
	export let polishes;
	import PolishListBox from './PolishListBox.svelte';
</script>

<div class="picker-list">
	{#each polishes.nailpolish as nailpolish}
		<PolishListBox {nailpolish} />
	{/each}
</div>

<style>
	.picker-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		width: 75vw;

		margin: auto;
	}
</style>
