window.buildStarfield = function (container, count = 60) {
  if (!container || container.dataset.built === "true") return;
  container.dataset.built = "true";

  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const star = document.createElement("span");
    star.className = "star";
    const size = (Math.random() * 2 + 1).toFixed(2);
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${(Math.random() * 100).toFixed(2)}%`;
    star.style.left = `${(Math.random() * 100).toFixed(2)}%`;
    star.style.setProperty("--dur", `${(2 + Math.random() * 3).toFixed(2)}s`);
    star.style.setProperty("--delay", `${(Math.random() * 4).toFixed(2)}s`);
    frag.appendChild(star);
  }
  container.appendChild(frag);
};
