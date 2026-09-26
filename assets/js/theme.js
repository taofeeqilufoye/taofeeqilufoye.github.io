(() => {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");

  if (!toggle) return;

  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  try {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      root.dataset.theme = savedTheme;
    }
  } catch {
    // The theme still works for this visit if browser storage is unavailable.
  }

  const currentTheme = () =>
    root.dataset.theme || (systemPrefersDark.matches ? "dark" : "light");

  const updateToggle = () => {
    const nextTheme = currentTheme() === "dark" ? "light" : "dark";
    toggle.textContent = `Use ${nextTheme} theme`;
    toggle.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
  };

  toggle.addEventListener("click", () => {
    const nextTheme = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      // Keep the selected theme for this page view.
    }
    updateToggle();
  });

  updateToggle();
})();