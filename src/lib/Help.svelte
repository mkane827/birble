<script>
	import Modal from './Modal.svelte';
	import { getUniqueRandomsLessThan } from './random';

	export let onClose = () => {};

	const examples = getUniqueRandomsLessThan(6, 3);
</script>

<Modal {onClose}>
	<h1>How to birble</h1>
	<p>upload your daily birb</p>
	<p>must be a valid bird or birb. bird = birb.</p>
	<p>after each submission, the birb points will be awarded to show you how good your birb is.</p>
	<h2>Expamples</h2>
	<div class="examples">
		<img src="/example{examples[0]}.jpg" alt="example 1" />
		<img src="/example{examples[1]}.jpg" alt="example 2" />
		<img src="/example{examples[2]}.jpg" alt="example 3" />
	</div>
	<p>A birble is always available.</p>
</Modal>

<style>
	.examples {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	img {
		width: 30%;
	}
</style>
