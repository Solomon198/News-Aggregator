/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_THE_GUARDIAN_API_KEY: string;
  readonly VITE_NEW_YORK_TIMES_API_KEY: string;
  readonly VITE_NEWSAPI_API_KEY: string;
  readonly VITE_THE_GUARDIAN_BASE_URL: string;
  readonly VITE_NEW_YORK_TIMES_BASE_URL: string;
  readonly VITE_NEWSAPI_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
