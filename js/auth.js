const Auth = {
  login(login, password) {
    const user = DataStore.users.find(u => u.login === login.trim().toLowerCase() && u.password === password);
    if (!user) return { success: false, message: 'Identifiant ou mot de passe incorrect.' };
    localStorage.setItem('schoolAuth', JSON.stringify({ login: user.login, prenom: user.prenom, role: user.role }));
    return { success: true, user };
  },
  getCurrentUser() {
    try { return JSON.parse(localStorage.getItem('schoolAuth')); }
    catch { return null; }
  },
  isLoggedIn() {
    return !!this.getCurrentUser();
  },
  logout() {
    localStorage.removeItem('schoolAuth');
    window.location.href = 'index.html';
  },
  requireAuth() {
    if (!this.isLoggedIn()) {
      window.location.href = 'index.html';
      return false;
    }
    return true;
  }
};
