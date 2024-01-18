/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_SERVICE: string,
    readonly VITE_APP_TEMPLATE: string,
    readonly VITE_APP_KEY: string,
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}