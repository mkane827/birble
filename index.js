function run() {
  window.onresize = createBirble;
  document
    .querySelector("input.birble-input")
    .addEventListener("change", createBirble);
}

function createBirble() {
  const canvas = document.getElementById("birble-canvas");
  canvas.width = window.innerWidth * 0.8;
  canvas.height = window.innerHeight * 0.8;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const img = new Image();
  img.onload = function () {
    const hRatio = canvas.width / this.naturalWidth;
    const vRatio = canvas.height / this.naturalHeight;
    const ratio = Math.min(hRatio, vRatio);
    const hPadding = Math.max(
      0,
      (canvas.height - this.naturalHeight * ratio) / 2
    );
    const wPadding = Math.max(
      0,
      (canvas.width - this.naturalWidth * ratio) / 2
    );
    ctx.drawImage(
      img,
      0,
      0,
      this.naturalWidth,
      this.naturalHeight,
      wPadding,
      hPadding,
      this.naturalWidth * ratio,
      this.naturalHeight * ratio
    );

    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, canvas.height * 0.72, canvas.width, 80);
    ctx.fillStyle = "white";
    ctx.textBaseline = "middle";
    ctx.font = "48px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(
      "what a good birb. 1 million points",
      canvas.width / 2,
      canvas.height * 0.8,
      canvas.width * 0.8
    );
  };
  img.src = URL.createObjectURL(
    document.querySelector("input.birble-input").files[0]
  );
}
