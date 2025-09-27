import base from "./package.json";

const cfg = (base as any).docusaurus;

// Staging site URL
cfg.url = "https://docs.lamp.digital";
cfg.baseUrl = "/v2/";

// Enable Mermaid
cfg.themes = [...(cfg.themes ?? []), "@docusaurus/theme-mermaid"];
cfg.markdown = { ...(cfg.markdown ?? {}), mermaid: true };

cfg.themeConfig = {
  ...(cfg.themeConfig ?? {}),
  mermaid: {
    // Set options passed to Mermaid.init()
    options: {
      securityLevel: 'loose', // allows 'click' links inside diagrams
    },
  },
};

export default cfg;
