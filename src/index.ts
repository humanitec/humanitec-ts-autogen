import { Configuration } from './generated/configuration';

export * from './generated'

export interface APIConfig {
  token: string
  apiHost?: string
}

const defaultAPIHost = 'https://api.humanitec.com'

export const apiConfig = (config: APIConfig): Configuration => {
  if (!config.token) {
    throw new Error('token needs to provided')
  }

  const apiConfig = new Configuration({
    basePath: config.apiHost || defaultAPIHost,
    baseOptions: {
      headers: {
        'Authorization': `Bearer ${config.token}`,
      },
    },
  });

  return apiConfig;
}
