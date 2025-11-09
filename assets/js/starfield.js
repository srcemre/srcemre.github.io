const canvas = document.getElementById("starfield");

if (canvas) {
  const ctx = canvas.getContext("2d");
  let stars = [];
  const numStars = 1000;
  let width, height, centerX, centerY;

  function resizeCanvas() {
    width = canvas.width = document.documentElement.clientWidth;
    height = canvas.height = document.documentElement.clientHeight;
    centerX = width / 2;
    centerY = height / 2;
    stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width - centerX,
        y: Math.random() * height - centerY,
        z: Math.random() * width,
      });
    }
  }

  function animate() {
    ctx.fillStyle = "rgba(13,13,31,0.7)";
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < numStars; i++) {
      const star = stars[i];
      star.z -= 1;
      if (star.z <= 0) {
        star.x = Math.random() * width - centerX;
        star.y = Math.random() * height - centerY;
        star.z = width;
      }

      const k = 128.0 / star.z;
      const px = star.x * k + centerX;
      const py = star.y * k + centerY;

      if (px >= 0 && px <= width && py >= 0 && py <= height) {
        const size = (1 - star.z / width) * 1;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 - star.z / width})`;
        ctx.fill();
      }
    }
    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  animate();
}