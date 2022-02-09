<script>
	export let onClose = () => {};
</script>

<div class="wrapper">
	<div class="modal">
		<nav>
			<button on:click={onClose}>X</button>
		</nav>
		<slot />
	</div>
</div>

<style>
	.wrapper {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal {
		background: white;
		padding: 24px;
		min-width: 50vw;
	}

	nav {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 12px;
	}

	button {
		background: transparent;
		outline: none;
		border: solid 1px black;
		border-radius: 4px;
		margin-right: -12px;
		margin-top: -12px;
	}
</style>
