import base from "./package.json";

const cfg = (base as any).docusaurus;
cfg.baseUrl = "/v2/";                  // staging lives under /v2/
cfg.url = "https://docs.lamp.digital"; // your domain
export default cfg;
