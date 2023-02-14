<script>
	export let nailpolish;
	let color = '#fdfdfd';

	if (nailpolish.colorValue) {
		color = nailpolish.colorValue.hex;
	}
</script>

<div class="picker-box">
	<h1>{nailpolish.colorName}</h1>
	<div class="nail-polish-color" style="--theme-color: {color}">
		<h2>{nailpolish.color}</h2>
		<h2>{nailpolish.polishType}</h2>

		{#if nailpolish.colorType}
			<h2>{nailpolish.colorType}</h2>
		{/if}
	</div>
	<h1>{nailpolish.brand}</h1>
</div>

<style>
	.picker-box {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		background-color: #aeaeae;

		text-align: center;

		border-style: solid;
		border-width: 0.25rem 0.5rem 0.5rem 0.25rem;
		border-color: #666666;

		padding: 0 0 0.25rem 0;

		width: 30vw;
		height: 15rem;
	}
	.nail-polish-color {
		background-color: var(--theme-color);
		height: 7rem;
	}
</style>
