<script>
	import Modal from './Modal.svelte';

	export let onClose = () => {};
	export let hardMode;
</script>

<Modal {onClose}>
	<h1>settings</h1>
	<div class="hard-mode">
		<span>Hard Mode</span>
		<button on:click={() => (hardMode = !hardMode)} class:on={hardMode}>
			<div class="slider" />
		</button>
	</div>
</Modal>

<style>
	h1 {
		text-decoration: underline;
		padding: 0;
		margin: 0 0 12px;
		text-align: center;
	}

	.hard-mode {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.hard-mode button {
		background: grey;
		outline: none;
		border: none;
		width: 60px;
		height: 30px;
		border-radius: 40px;
	}

	.hard-mode button.on {
		background: darkgrey;
	}

	.hard-mode button .slider {
		height: 100%;
		width: 60%;
		border-radius: 50%;
		background: black;
		transition: all;
		transition-duration: 100ms;
		position: relative;
		left: -5px;
	}

	.hard-mode button.on .slider {
		left: 25px;
	}
</style>
