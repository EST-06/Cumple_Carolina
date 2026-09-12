window.initPortada = function () {
  const giftBtn = document.getElementById("openGift");
  const invitationBtn = document.getElementById("openInvitation");
  const hint = document.querySelector(".portada__hint");
  const scene = document.querySelector(".portada");

  const COLORS = ["#8B5CF6", "#7DD3FC", "#F9A8D4", "#C4B5FD", "#F0C36B"];

  function launchConfetti() {
    const count = 26;
    for (let i = 0; i < count; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      const size = 6 + Math.random() * 6;
      const angle = Math.random() * Math.PI * 2;
      const distance = 90 + Math.random() * 160;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance - 60;

      piece.style.width = `${size}px`;
      piece.style.height = `${size * 0.6}px`;
      piece.style.background = COLORS[i % COLORS.length];
      piece.style.setProperty("--dx", `${dx}px`);
      piece.style.setProperty("--dy", `${dy}px`);
      piece.style.animation = `confettiBurst 1.1s ease-out forwards`;
      piece.style.animationDelay = `${Math.random() * 0.15}s`;
      scene.appendChild(piece);

      setTimeout(() => piece.remove(), 1500);
    }
  }

  if (!document.getElementById("confetti-keyframes")) {
    const style = document.createElement("style");
    style.id = "confetti-keyframes";
    style.textContent = `
      @keyframes confettiBurst {
        0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
        100% { transform: translate(var(--dx), var(--dy)) rotate(340deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  if (giftBtn) {
    giftBtn.addEventListener("click", () => {
      if (giftBtn.classList.contains("is-open")) return;
      giftBtn.classList.add("is-open");
      launchConfetti();

      if (invitationBtn) invitationBtn.classList.add("is-ready");
      if (hint) hint.classList.add("is-hidden");
    }, { once: true });
  }

  if (invitationBtn) {
    invitationBtn.addEventListener("click", () => {
      window.navigate("invitacion");
    });
  }
};
