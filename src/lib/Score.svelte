<script>
	import { onMount } from 'svelte';
	import Modal from './Modal.svelte';
	import { getRandomLessThan } from './random';
	export let points;
	export let onClose;
	export let canvas;
	let navigatorShare;

	onMount(() => {
		navigatorShare = navigator && navigator.share;
	});

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

	$: featherPoints = getRandomLessThan(points);
	$: beakPoints = getRandomLessThan(points - featherPoints);
	$: talonPoints = points - featherPoints - beakPoints;
</script>

<Modal {onClose}>
	<h1>POINTS AWARDED</h1>
	<h1>{points}</h1>
	<h2>Point distribution</h2>
	<div>Feathers {featherPoints}</div>
	<div>Beak {beakPoints}</div>
	<div>Talons {talonPoints}</div>
	{#if navigatorShare}
		<button class="share-birble" on:click={share}>Share your birb</button>
	{/if}
</Modal>

<style>
	.share-birble {
		outline: none;
		border: none;
		background-color: #fbda61;
		background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
		padding: 8px;
		font-size: 16px;
		margin-top: 16px;
	}

	h1,
	h2 {
		padding: 0;
		margin: 0;
		text-align: center;
	}
</style>
