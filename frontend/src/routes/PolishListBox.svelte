<script>
	export let nailpolish;
	let color = '#fdfdfd';

	if (nailpolish.colorValue) {
		color = nailpolish.colorValue.hex;
	}
</script>

<div class="picker-box">
	<h1>{nailpolish.colorName}</h1>

	<div class="nail-polish">
		<div class="polish-text">
			<h3>Color: {nailpolish.color}</h3>
			{#if nailpolish.colorType}
				<h3>Color type: {nailpolish.colorType}</h3>
			{/if}
			<h3>Polish type: {nailpolish.polishType}</h3>
			<h3>Polish brand: {nailpolish.brand}</h3>
		</div>
		<div class="polish-color" style="--theme-color: {color}" />
	</div>
</div>

<style>
	.picker-box {
		display: flex;
		flex-direction: column;
		background-color: #aeaeae;

		text-align: center;

		border-style: solid;
		border-width: 0.25rem 0.5rem 0.5rem 0.25rem;
		border-color: #666666;

		padding: 0 0 0.25rem 0;

		width: 25vw;
		height: 15rem;
	}
	.picker-box h1 {
		height: 100px;
	}

	.nail-polish {
		display: flex;
		justify-content: space-evenly;
	}
	.polish-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
	}
	.polish-color {
		background-color: var(--theme-color);
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
	h3 {
		font-weight: lighter;
		font-size: medium;
	}
</style>
