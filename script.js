const canvas = document.getElementById("networkCanvas");
const context = canvas.getContext("2d");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let width = 0;
let height = 0;
let points = [];
let animationFrame = null;

let mouseX = 0;
let mouseY = 0;
let targetParallaxX = 0;
let targetParallaxY = 0;
let parallaxX = 0;
let parallaxY = 0;

function setPointerFromClient(clientX, clientY) {
  mouseX = clientX;
  mouseY = clientY;
  const nx = width > 0 ? clientX / width : 0.5;
  const ny = height > 0 ? clientY / height : 0.5;
  document.documentElement.style.setProperty("--pointer-x", `${nx * 100}%`);
  document.documentElement.style.setProperty("--pointer-y", `${ny * 100}%`);
  targetParallaxX = (nx - 0.5) * 22;
  targetParallaxY = (ny - 0.5) * 16;
}

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);

  const pointCount = Math.max(34, Math.min(72, Math.floor(width / 22)));
  points = Array.from({ length: pointCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.24,
    vy: (Math.random() - 0.5) * 0.24,
    radius: Math.random() * 1.6 + 0.8,
  }));

  setPointerFromClient(mouseX || width * 0.5, mouseY || height * 0.4);
}

function draw() {
  context.clearRect(0, 0, width, height);

  parallaxX += (targetParallaxX - parallaxX) * 0.07;
  parallaxY += (targetParallaxY - parallaxY) * 0.07;
  document.documentElement.style.setProperty("--parallax-x", `${parallaxX}px`);
  document.documentElement.style.setProperty("--parallax-y", `${parallaxY}px`);

  for (const point of points) {
    point.x += point.vx;
    point.y += point.vy;

    if (point.x < -20) point.x = width + 20;
    if (point.x > width + 20) point.x = -20;
    if (point.y < -20) point.y = height + 20;
    if (point.y > height + 20) point.y = -20;
  }

  for (let i = 0; i < points.length; i += 1) {
    for (let j = i + 1; j < points.length; j += 1) {
      const a = points[i];
      const b = points[j];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);

      if (distance < 150) {
        const midX = (a.x + b.x) * 0.5;
        const midY = (a.y + b.y) * 0.5;
        const cursorDist = Math.hypot(mouseX - midX, mouseY - midY);
        const cursorBoost = cursorDist < 200 ? (1 - cursorDist / 200) * 0.55 : 0;
        const alpha = 0.14 * (1 - distance / 150) + cursorBoost * 0.22;
        context.strokeStyle = `rgba(96, 165, 250, ${Math.min(alpha, 0.55)})`;
        context.lineWidth = 1 + cursorBoost * 0.6;
        context.beginPath();
        context.moveTo(a.x, a.y);
        context.lineTo(b.x, b.y);
        context.stroke();
      }
    }
  }

  for (const point of points) {
    const d = Math.hypot(mouseX - point.x, mouseY - point.y);
    const pulse = d < 140 ? (1 - d / 140) * 0.45 : 0;
    context.fillStyle = `rgba(56, 189, 248, ${0.28 + pulse})`;
    context.beginPath();
    context.arc(point.x, point.y, point.radius + pulse * 2.2, 0, Math.PI * 2);
    context.fill();
  }

  const linkRadius = 130;
  for (const point of points) {
    const d = Math.hypot(mouseX - point.x, mouseY - point.y);
    if (d >= linkRadius) continue;
    const t = 1 - d / linkRadius;
    context.strokeStyle = `rgba(34, 211, 238, ${0.12 + t * 0.35})`;
    context.lineWidth = 1 + t * 1.2;
    context.beginPath();
    context.moveTo(mouseX, mouseY);
    context.lineTo(point.x, point.y);
    context.stroke();
  }

  animationFrame = window.requestAnimationFrame(draw);
}

function startNetwork() {
  if (prefersReducedMotion.matches) {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
    context.clearRect(0, 0, width, height);
    document.documentElement.style.setProperty("--parallax-x", "0px");
    document.documentElement.style.setProperty("--parallax-y", "0px");
    return;
  }

  if (animationFrame) {
    window.cancelAnimationFrame(animationFrame);
  }

  draw();
}

resizeCanvas();
mouseX = width * 0.5;
mouseY = height * 0.4;
setPointerFromClient(mouseX, mouseY);
startNetwork();

window.addEventListener("resize", () => {
  resizeCanvas();
  startNetwork();
});

window.addEventListener(
  "mousemove",
  (event) => {
    if (prefersReducedMotion.matches) return;
    setPointerFromClient(event.clientX, event.clientY);
  },
  { passive: true }
);

window.addEventListener(
  "mouseleave",
  () => {
    if (prefersReducedMotion.matches) return;
    setPointerFromClient(width * 0.5, height * 0.35);
  },
  { passive: true }
);

prefersReducedMotion.addEventListener("change", startNetwork);
