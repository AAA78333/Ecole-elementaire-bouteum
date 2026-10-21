const App = {
  init() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const topbar = document.getElementById('topbar');

    if (sidebar && topbar) {
      sidebar.innerHTML = `
        <div class="sidebar-header">
          <div><strong>École Boutum</strong></div>
          <button class="icon-btn" id="closeSidebarBtn" aria-label="Fermer">✕</button>
        </div>
        <nav class="sidebar-nav">
          <div class="nav-section">
            <div class="nav-label">Navigation</div>
            <a href="dashboard.html" class="active">📊 Tableau de bord</a>
            <a href="eleves.html">👩‍🎓 Élèves</a>
            <a href="enseignants.html">👨‍🏫 Enseignants</a>
            <a href="classes.html">🏫 Classes</a>
            <a href="matieres.html">📚 Matières</a>
            <a href="notes.html">📝 Notes</a>
            <a href="absences.html">🚫 Absences</a>
            <a href="retards.html">⏰ Retards</a>
            <a href="bulletins.html">📄 Bulletins</a>
            <a href="paiements.html">💳 Paiements</a>
            <a href="journal-activite.html">🗓️ Journal</a>
            <a href="contact.html">📧 Contact</a>
            <a href="profile.html">👤 Profil</a>
            <a href="utilisateurs.html">🔐 Utilisateurs</a>
          </div>
        </nav>
      `;

      topbar.innerHTML = `
        <div class="left-group">
          <button class="icon-btn" id="toggleSidebarBtn" aria-label="Menu">☰</button>
          <div class="user-badge">
            <span>👤</span>
            <span>${Auth.getCurrentUser().prenom}</span>
          </div>
        </div>
        <div class="left-group">
          <button class="btn btn-outline btn-sm" onclick="Auth.logout()">Déconnexion</button>
        </div>
      `;

      document.getElementById('toggleSidebarBtn')?.addEventListener('click', () => {
        sidebar.classList.toggle('show');
        overlay.classList.toggle('show');
      });

      document.getElementById('closeSidebarBtn')?.addEventListener('click', () => {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
      });

      overlay?.addEventListener('click', () => {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
      });
    }
  }
};
