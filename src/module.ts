import { defineNuxtModule } from '@nuxt/kit';

// Module options TypeScript interface definition
export interface ModuleOptions {
  test: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    test: '',
  },
  setup(_options, _nuxt) {},
});
