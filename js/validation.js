const Validation = {
  isEmail(value) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); },
  isRequired(value) { return !!String(value || '').trim(); }
};
