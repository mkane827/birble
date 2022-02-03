<script>
	export let file;
	export let rating;
	export let canvas;
	let height = 0;
	let width = 0;

	$: {
		if (canvas && file) {
			canvas.width = height * 0.8;
			canvas.height = width * 0.8;
			const ctx = canvas.getContext('2d');
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			const img = new Image();
			img.onload = function () {
				const hRatio = canvas.width / this.naturalWidth;
				const vRatio = canvas.height / this.naturalHeight;
				const ratio = Math.min(hRatio, vRatio);
				const wPadding = Math.max(0, (canvas.width - this.naturalWidth * ratio) / 2);
				ctx.drawImage(
					img,
					0,
					0,
					this.naturalWidth,
					this.naturalHeight,
					wPadding,
					0,
					this.naturalWidth * ratio,
					this.naturalHeight * ratio
				);

				ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
				ctx.fillRect(0, 20, canvas.width, 60);
				ctx.fillStyle = 'white';
				ctx.textBaseline = 'middle';
				ctx.font = '30px sans-serif';
				ctx.textAlign = 'center';
				ctx.fillText(rating, canvas.width / 2, 50, canvas.width * 0.8);
			};
			img.src = URL.createObjectURL(file);
		}
	}
</script>

<div bind:clientHeight={height} bind:clientWidth={width} on:resize={() => console.log('resize')}>
	<canvas bind:this={canvas} />
</div>

<style>
	div {
		flex: 1 1 auto;
		min-height: 0;
	}
</style>
