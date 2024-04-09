import { defineConfig } from "@umijs/max";
import routes from './routes';

export default defineConfig({
  routes,
  npmClient: 'pnpm',
  model: {},
});
