document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Initial theme is set by the inline script in <head> to avoid a light flash
  var root = document.documentElement;
  var nav = document.querySelector('.nav');

  if (nav) {
    var themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle';
    nav.appendChild(themeBtn);

    var renderTheme = function () {
      var dark = root.dataset.theme === 'dark';
      themeBtn.textContent = dark ? '☀︎' : '☾︎';
      themeBtn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    };
    renderTheme();

    themeBtn.addEventListener('click', function () {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
      renderTheme();
    });
  }
});
