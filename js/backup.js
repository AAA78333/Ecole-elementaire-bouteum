const Backup = {
  save(key, value) { localStorage.setItem(key, JSON.stringify(value)); },
  load(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
};
