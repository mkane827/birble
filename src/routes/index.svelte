<script>
	import Canvas from '$lib/Canvas.svelte';
	import { rollRating } from '$lib/ratings';
	import { onMount } from 'svelte';
	let rating = rollRating();
	let file,
		files,
		canvas = {},
		navigatorShare;

	onMount(() => {
		navigatorShare = navigator && navigator.share;
	});

	function newBirb() {
		rating = rollRating();
		file = files[0];
	}

	function share() {
		fetch(canvas.toDataURL())
			.then((img) => img.blob())
			.then((blob) => {
				navigatorShare({
					files: [
						new File([blob], 'birb.png', {
							type: blob.type,
							lastModified: new Date().getTime()
						})
					]
				});
			});
	}

	$: showShare = navigatorShare && files && files.length > 0;
</script>

<div class="birble">
	<label class="birble-label">
		<h1>Upload your birb!</h1>
		<h2 class="birble-target">Choose birb</h2>
		<input class="birble-input" type="file" accept="image/*" bind:files on:change={newBirb} />
	</label>

	<Canvas bind:canvas {file} {rating} />
	{#if showShare}
		<button class="share-birble" on:click={() => share()}>Share your birb</button>
	{/if}
</div>

<style>
	:global(body) {
		font-family: 'Roboto', sans-serif;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: stretch;
		min-height: 0;
	}

	.birble {
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		max-height: 100%;
	}

	.birble-label {
		margin-bottom: 16px;
	}

	.birble-input {
		opacity: 0;
		height: 1px;
		width: 1px;
	}

	.birble-target {
		background-color: #fbda61;
		background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
		padding: 8px;
		cursor: pointer;
		text-align: center;
	}

	.share-birble {
		outline: none;
		border: none;
		background-color: #fbda61;
		background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
		padding: 8px;
		font-size: 16px;
		margin-top: 16px;
	}
</style>
