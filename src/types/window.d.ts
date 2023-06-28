import { Brand, Environment } from "./config";

declare global {
  interface Window {
    BRAND: Brand;
    ENVIRONMENT: Environment;
    PUBLIC_APP_SETTING_IS_OPC: boolean;
    PUBLIC_APP_SETTING_WEBSHOP_API: string;
    dataLayer: object[];

    __HERCULES__?: {
      pagePath?: string;
    };
  }
}
