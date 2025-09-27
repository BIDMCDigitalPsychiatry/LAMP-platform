// docusaurus.config.v2.ts
import base from "./package.json";

// Start from your package.json-driven config
const cfg = (base as any).docusaurus;

// ---- Site URLs (STAGING) ----
cfg.url = "https://docs.lamp.digital";
cfg.baseUrl = "/v2/";

// ---- Enable Mermaid (dedupe then add exactly once) ----
const THEME_MERMAID = "@docusaurus/theme-mermaid";
const inheritedThemes = Array.isArray(cfg.themes) ? cfg.themes : [];

// Remove any prior mermaid entries (string, tuple, or object form)
cfg.themes = inheritedThemes.filter((t: any) => {
  if (typeof t === "string") return t !== THEME_MERMAID;
  if (Array.isArray(t)) return t[0] !== THEME_MERMAID;
  if (typeof t === "object" && t?.name) return t.name !== THEME_MERMAID;
  return true;
});

// Add exactly one instance
cfg.themes.push(THEME_MERMAID);

// Turn on Markdown mermaid + optional clickable links
cfg.markdown = { ...(cfg.markdown ?? {}), mermaid: true };
cfg.themeConfig = {
  ...(cfg.themeConfig ?? {}),
  mermaid: { options: { securityLevel: "loose" } },
};

// ---- Optional: disable blog to silence warning ----
if (cfg.presets) {
  cfg.presets = cfg.presets.map((preset: any) => {
    if (Array.isArray(preset) && preset[0] === "classic") {
      return [
        preset[0],
        {
          ...(preset[1] ?? {}),
          blog: false,
        },
      ];
    }
    return preset;
  });
}

export default cfg;