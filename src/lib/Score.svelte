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
	<h1 class="total-points">{points}</h1>
	<h2>Point distribution</h2>
	<div class="point-value">
		<span class="category">Feathers</span>
		<div class="point-graph" style="width: {20 + 20 * featherPoints}px">
			{featherPoints}
		</div>
	</div>
	<div class="point-value">
		<span class="category">Beak</span>
		<div class="point-graph" style="width: {20 + 20 * beakPoints}px">{beakPoints}</div>
	</div>
	<div class="point-value">
		<span class="category">Talons</span>
		<div class="point-graph" style="width: {20 + 20 * talonPoints}px">{talonPoints}</div>
	</div>
	{#if navigatorShare || true}
		<button class="share-birble" on:click={share}
			>Share birb <img src="/share.png" alt="share birb" /></button
		>
	{/if}
</Modal>

<style>
	.share-birble {
		outline: none;
		border: none;
		background-color: #fbda61;
		background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
		border-radius: 4px;
		padding: 8px;
		font-size: 16px;
		margin-top: 16px;
		text-transform: uppercase;
		display: flex;
		align-items: center;
	}

	.share-birble img {
		height: 20px;
		margin-left: 8px;
	}

	h1,
	h2 {
		padding: 0;
		margin: 0;
		text-align: center;
	}

	.total-points {
		margin-bottom: 12px;
	}

	.point-value {
		display: flex;
	}

	.category {
		width: 100px;
	}

	.point-graph {
		background-color: #fbda61;
		background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
		height: 100%;
		display: inline-block;
		padding-left: 8px;
	}
</style>
