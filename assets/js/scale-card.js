export function scaleCard() {
  const cardScaler = document.getElementById("card-scaler");
  if (!cardScaler) return;

  const cardDesignWidth = 550;
  const cardDesignHeight = 350;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const scaleW = (viewportWidth / cardDesignWidth) * 0.85;
  const scaleH = (viewportHeight / cardDesignHeight) * 0.85;

  const scale = Math.min(1, scaleW, scaleH);

  cardScaler.style.transform = `scale(${scale})`;
  cardScaler.style.transformOrigin = "center center";
}

window.addEventListener("load", () => {
  scaleCard();
  window.addEventListener("resize", scaleCard);
  setTimeout(scaleCard, 200);
});