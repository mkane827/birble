let rating;

function rollRating() {
  rating = ratings[Math.floor((Math.random() * 1000) % ratings.length)];
}

function run() {
  window.onresize = createBirble;
  document
    .querySelector("input.birble-input")
    .addEventListener("change", () => {
      rollRating();
      createBirble();
    });
}

function createBirble() {
  const files = document.querySelector("input.birble-input").files;
  const shareButtonClassList = document.querySelector(
    "button.share-birble"
  ).classList;
  if (!files || files.length < 1) return;
  if (navigator.share) shareButtonClassList.remove("hidden");
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
      0,
      this.naturalWidth * ratio,
      this.naturalHeight * ratio
    );

    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 20, canvas.width, 60);
    ctx.fillStyle = "white";
    ctx.textBaseline = "middle";
    ctx.font = "30px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(rating, canvas.width / 2, 50, canvas.width * 0.8);
  };
  img.src = URL.createObjectURL(files[0]);
}

function share() {
  fetch(document.getElementById("birble-canvas").toDataURL())
    .then((img) => img.blob())
    .then((blob) => {
      navigator.share({
        files: [
          new File([blob], "birb.png", {
            type: blob.type,
            lastModified: new Date().getTime(),
          }),
        ],
      });
    });
}
