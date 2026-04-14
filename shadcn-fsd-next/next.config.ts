import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const URL_CONFIG_I18N = './src/shared/i18n/request.ts';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

const withNextIntl = createNextIntlPlugin(URL_CONFIG_I18N);
export default withNextIntl(nextConfig);
