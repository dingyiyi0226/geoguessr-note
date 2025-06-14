(function () {
  const storageKey = 'theme';
  const button = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-toggle-icon');
  const sun = '{{ "svg/sun.svg" | relURL }}';
  const moon = '{{ "svg/moon.svg" | relURL }}';

  function apply(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (icon) icon.src = sun;
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (icon) icon.src = moon;
      theme = 'light';
    }
    localStorage.setItem(storageKey, theme);
  }

  const saved = localStorage.getItem(storageKey);
  if (saved) {
    apply(saved);
  }

  if (button) {
    button.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(current);
    });
  }
})();
