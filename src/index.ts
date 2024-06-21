import { Configuration } from "./generated/index.js";

export * from "./generated/index.js";

export interface APIConfig {
  token: string;
  apiHost?: string;
  internalApp?: string;
}

const defaultAPIHost = "https://api.humanitec.io";
const sdk = "humanitec-ts-autogen";
const sdkVersion = "latest";

interface UserAgentDetails {
  sdk: string;
  app?: string;
}

const humanitecUserAgentHeader = ({ sdk, app }: UserAgentDetails): string => {
  const elements = [];
  if (sdk) {
    elements.push(`sdk ${sdk}`);
  }
  if (app) {
    elements.push(`app ${app}`);
  }

  return elements.join("; ");
};

export const apiConfig = (config: APIConfig): Configuration => {
  if (!config.token) {
    throw new Error("token needs to provided");
  }

  const apiConfig = new Configuration({
    basePath: config.apiHost || defaultAPIHost,
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Humanitec-User-Agent": humanitecUserAgentHeader({
        app: config.internalApp,
        sdk: `${sdk}/${sdkVersion}`,
      }),
    },
  });

  return apiConfig;
};
