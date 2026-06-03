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
    title: "Projeto 1 — Landing Page com IA",
    description: "Página de apresentação gerada com auxílio de inteligência artificial.",
    url: "#",
    icon: "🚀"
  },
  {
    title: "Projeto 2 — Portfólio Responsivo",
    description: "Site de portfólio pessoal, adaptável a qualquer tela.",
    url: "#",
    icon: "🎨"
  },
  {
    title: "Projeto 3 — Site de Produto",
    description: "Página de divulgação de produto com foco em conversão.",
    url: "#",
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
document.addEventListener("DOMContentLoaded", renderProjects);
