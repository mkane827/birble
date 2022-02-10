<script>
	import Modal from './Modal.svelte';

	export let onClose = () => {};
</script>

<Modal {onClose}>
	<h1>How to birble</h1>
	<p>upload your daily birb</p>
	<p>must be a valid bird or birb. bird = birb.</p>
	<p>after each submission, the birb points will be awarded to show you how good your birb is.</p>
	<h2>Expamples</h2>
	<p>A birble is always available.</p>
</Modal>
