<script>
	import Help from '$lib/Help.svelte';
	import { getRandomLessThan } from '$lib/random';
	import { rollRating } from '$lib/ratings';
	import Score from '$lib/Score.svelte';
	import Settings from '$lib/Settings.svelte';
	import { onMount } from 'svelte';
	let rating = rollRating();
	let showScore = false,
		showSettings = false,
		showHelp = false,
		hardMode = false,
		imgSrc;

	onMount(() => {
		showHelp = !localStorage.getItem('isFirstVisit');
		localStorage.setItem('isFirstVisit', false);
		newBirb();
	});

	function newBirb(e) {
		const hasSelectedFile = e && e.target && e.target.files && e.target.files.length > 0;
		rating = rollRating();
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');

		const img = new Image();
		img.onload = function () {
			canvas.height = this.naturalHeight;
			canvas.width = this.naturalWidth;
			ctx.drawImage(img, 0, 0, this.naturalWidth, this.naturalHeight);

			const paddingTop = this.naturalHeight / 20;
			ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
			ctx.fillRect(0, paddingTop, canvas.width, this.naturalHeight / 10);
			ctx.fillStyle = 'white';
			ctx.textBaseline = 'top';
			ctx.font = `${this.naturalHeight / 200}rem sans-serif`;
			ctx.textAlign = 'center';
			ctx.fillText(rating.description, canvas.width / 2, paddingTop * 1.2, canvas.width * 0.8);

			if (hasSelectedFile) {
				showScore = true;
			}

			imgSrc = canvas.toDataURL();
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

	<div class="img-wrapper">
		{#if imgSrc}
			<img src={imgSrc} alt="birble" />
		{/if}
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
		<Score onClose={() => (showScore = false)} points={rating.points} {imgSrc} />
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

	.img-wrapper {
		flex: 1 1 auto;
		min-height: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 24px;
	}

	.img-wrapper img {
		max-height: 100%;
		max-width: 100%;
	}
</style>
