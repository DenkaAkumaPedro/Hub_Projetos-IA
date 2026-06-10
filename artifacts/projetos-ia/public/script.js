/* ============================================================
   Projetos do Curso de IA — script principal
   ============================================================

   COMO ADICIONAR UM NOVO PROJETO:
   --------------------------------
   Basta adicionar um novo objeto ao array `projects` abaixo,
   seguindo o mesmo padrão dos existentes:

     {
       title: "Nome do Projeto",
       description: "Descrição curta do que o projeto faz.",
       url: "https://link-do-seu-projeto.com",
       icon: "🔗"  // qualquer emoji que represente o projeto
     }

   Salve o arquivo e pronto. O card aparece automaticamente.
   ============================================================ */

const projects = [
  // ▼ ADICIONE NOVOS PROJETOS AQUI ▼

  {
    title: "Projeto 1 — Link Hub Bio feito no Replit",
    description: "Página de apresentação gerada com auxílio de inteligência artificial.",
    url: "https://denkaakumapedro.github.io/Link-Hub-M2-T/",
    icon: "🚀"
  },
  {
    title: "Projeto 2 — Link Hub Bio feito no VSCode",
    description: "Site de portfólio pessoal, adaptável a qualquer tela.",
    url: "https://project-ox8vy-86svpshzh-denka-akuma-s-projects.vercel.app/",
    icon: "🎨"
  },
  {
    title: "Projeto 3 — Link Hub Bio feito no Claude",
    description: "Página de divulgação de produto com foco em conversão.",
    url: "https://claude-1-teste-qm7b44655-denka-akuma-s-projects.vercel.app/",
    icon: "🛍️"
  },
  {
    title: "Projeto 4 — Página de Serviços",
    description: "Apresentação profissional de serviços e diferenciais.",
    url: "#",
    icon: "⚙️"
  },
  {
    title: "Projeto 5 — Mini Dashboard",
    description: "Painel visual simples para acompanhar métricas e dados.",
    url: "#",
    icon: "📊"
  },

  // ▲ FIM DA LISTA DE PROJETOS ▲
];

/* ============================================================
   Renderização dos cards — não é necessário editar abaixo
   ============================================================ */

function renderProjects() {
  const container = document.getElementById("projects-list");

  if (!container) return;

  if (projects.length === 0) {
    container.innerHTML = `
      <p style="text-align:center; color: var(--text-secondary); padding: 32px 0;">
        Nenhum projeto cadastrado ainda.
      </p>`;
    return;
  }

  projects.forEach(function (project, index) {
    const card = document.createElement("a");
    card.className = "project-card";
    card.href = project.url;

    // Abre em nova aba (exceto links placeholder)
    if (project.url && project.url !== "#") {
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

    // Delay escalonado para animação de entrada suave
    card.style.animationDelay = index * 60 + "ms";

    card.innerHTML = `
      <div class="card-icon" aria-hidden="true">${project.icon}</div>
      <div class="card-body">
        <div class="card-title">${escapeHtml(project.title)}</div>
        <div class="card-description">${escapeHtml(project.description)}</div>
      </div>
      <div class="card-arrow" aria-hidden="true">→</div>
    `;

    container.appendChild(card);
  });
}

/* Sanitiza texto para evitar XSS caso alguém edite o array com conteúdo inesperado */
function escapeHtml(text) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}

/* Inicia a renderização quando o DOM estiver pronto */
document.addEventListener("DOMContentLoaded", function () {
  renderProjects();
  initHexBackground();
});

/* ============================================================
   Fundo animado com hexágonos
   ============================================================ */

function initHexBackground() {
  const canvas = document.getElementById("hex-bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const COLORS = [
    "rgba(45, 91, 227, 0.18)",   // azul
    "rgba(220, 38, 38, 0.15)",   // vermelho
    "rgba(34, 197, 94, 0.15)",   // verde
    "rgba(10, 10, 10, 0.12)",    // preto
    "rgba(255, 255, 255, 0.22)", // branco
  ];

  const STROKE_COLORS = [
    "rgba(45, 91, 227, 0.35)",
    "rgba(220, 38, 38, 0.30)",
    "rgba(34, 197, 94, 0.30)",
    "rgba(10, 10, 10, 0.20)",
    "rgba(200, 200, 200, 0.40)",
  ];

  let hexagons = [];
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function randomBetween(a, b) {
    return a + Math.random() * (b - a);
  }

  function createHex() {
    const colorIdx = Math.floor(Math.random() * COLORS.length);
    return {
      x: randomBetween(0, W),
      y: randomBetween(0, H),
      r: randomBetween(28, 72),
      vx: randomBetween(-0.18, 0.18),
      vy: randomBetween(-0.14, 0.14),
      angle: randomBetween(0, Math.PI),
      va: randomBetween(-0.003, 0.003),
      fill: COLORS[colorIdx],
      stroke: STROKE_COLORS[colorIdx],
      alpha: randomBetween(0.5, 1),
    };
  }

  function drawHex(h) {
    ctx.save();
    ctx.translate(h.x, h.y);
    ctx.rotate(h.angle);
    ctx.globalAlpha = h.alpha;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i;
      const px = h.r * Math.cos(a);
      const py = h.r * Math.sin(a);
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = h.fill;
    ctx.fill();
    ctx.strokeStyle = h.stroke;
    ctx.lineWidth = 1.2;
    ctx.stroke();
    ctx.restore();
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    for (const h of hexagons) {
      h.x += h.vx;
      h.y += h.vy;
      h.angle += h.va;
      if (h.x < -h.r * 2) h.x = W + h.r;
      if (h.x > W + h.r * 2) h.x = -h.r;
      if (h.y < -h.r * 2) h.y = H + h.r;
      if (h.y > H + h.r * 2) h.y = -h.r;
      drawHex(h);
    }
    requestAnimationFrame(tick);
  }

  function init() {
    resize();
    const count = Math.floor((W * H) / 22000);
    hexagons = Array.from({ length: Math.max(18, Math.min(count, 55)) }, createHex);
    tick();
  }

  window.addEventListener("resize", function () {
    resize();
  });

  init();
}
