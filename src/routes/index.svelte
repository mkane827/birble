<script>
	import Help from '$lib/Help.svelte';
	import { getRandomLessThan } from '$lib/random';
	import { rollRating } from '$lib/ratings';
	import Score from '$lib/Score.svelte';
	import Settings from '$lib/Settings.svelte';
	import { onMount } from 'svelte';
	let rating = rollRating();
	let canvasWrapperHeight,
		canvasWrapperWidth,
		imgHeight,
		imgWidth,
		canvas = {},
		showScore = false,
		showSettings = false,
		showHelp = false,
		hardMode = false;

	onMount(() => {
		showHelp = !localStorage.getItem('isFirstVisit');
		localStorage.setItem('isFirstVisit', false);
		newBirb();
	});

	function newBirb(e) {
		const hasSelectedFile = e && e.target && e.target.files && e.target.files.length > 0;
		rating = rollRating();
		canvas.width = canvasWrapperHeight * 0.8;
		canvas.height = canvasWrapperWidth * 0.8;
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		const img = new Image();
		img.onload = function () {
			const hRatio = canvas.width / this.naturalWidth;
			const vRatio = canvas.height / this.naturalHeight;
			const ratio = Math.min(hRatio, vRatio);
			const wPadding = Math.max(0, (canvas.width - this.naturalWidth * ratio) / 2);
			imgHeight = this.naturalHeight * ratio;
			imgWidth = this.naturalWidth * ratio;
			ctx.drawImage(
				img,
				0,
				0,
				this.naturalWidth,
				this.naturalHeight,
				wPadding,
				0,
				imgWidth,
				imgHeight
			);

			ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
			ctx.fillRect(0, 20, canvas.width, 60);
			ctx.fillStyle = 'white';
			ctx.textBaseline = 'middle';
			ctx.font = '30px sans-serif';
			ctx.textAlign = 'center';
			ctx.fillText(rating.description, canvas.width / 2, 50, canvas.width * 0.8);

			if (hasSelectedFile) {
				showScore = true;
			}
		};
		if (hasSelectedFile) {
			img.src = URL.createObjectURL(e.target.files[0]);
		} else {
			img.src = `./placeholder${getRandomLessThan(7)}.jpg`;
		}
	}
</script>

<div class="birble">
	<header>
		<h1>birble</h1>
		<div>
			<button class="header-button" on:click={() => (showHelp = true)}
				><img src="./help.png" alt="help" /></button
			>
			<button class="header-button" on:click={() => (showSettings = true)}
				><img src="./settings.png" alt="settings" /></button
			>
		</div>
	</header>

	<div
		class="canvas-wrapper"
		bind:clientHeight={canvasWrapperHeight}
		bind:clientWidth={canvasWrapperWidth}
		on:resize={() => console.log('resize')}
	>
		<canvas bind:this={canvas} />
	</div>
	<label class="birble-label">
		<h2 class="birble-target">Add birb</h2>
		<input class="birble-input" type="file" accept="image/*" on:change={newBirb} />
	</label>
	{#if showHelp}
		<Help onClose={() => (showHelp = false)} />
	{:else if showSettings}
		<Settings onClose={() => (showSettings = false)} bind:hardMode />
	{:else if showScore}
		<Score onClose={() => (showScore = false)} points={rating.points} {canvas} />
	{/if}
</div>

<style>
	:global(body) {
		font-family: 'Roboto', sans-serif;
		height: 100vh;
		margin: 0;
		padding: 0;
		overflow: hidden;
		text-transform: uppercase;
	}

	header {
		display: flex;
		align-items: center;
		width: 80%;
		padding: 16px 0 4px;
		border-bottom: solid 1px black;
	}

	header h1 {
		flex: 1 1 auto;
		text-align: center;
		margin: 0 0 0 88px;
		padding: 0;
	}

	.header-button {
		background: none;
		border: none;
		outline: none;
	}

	.header-button img {
		height: 30px;
	}

	.birble {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		width: 100%;
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
		border-radius: 4px;
		padding: 8px;
		cursor: pointer;
		text-align: center;
	}

	.canvas-wrapper {
		flex: 1 1 auto;
		min-height: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
