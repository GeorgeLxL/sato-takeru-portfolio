/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_TO_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
